#!/usr/bin/env node
import * as database from "./database";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

// Environment variables are provided by Claude Desktop, no need to load .env

async function startServer() {
  const server = new Server(
    {
      name: "person-search-mcp",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  const tools = [
    {
      name: "create_user",
      description: "Create a new user",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Full name" },
          email: { type: "string", description: "Email address" },
          phoneNumber: { type: "string", description: "Phone number (04xxxxxxxx)" },
        },
        required: ["name", "email", "phoneNumber"],
      },
    },
    {
      name: "read_user",
      description: "Get user by ID or search by name",
      inputSchema: {
        type: "object",
        properties: {
          userId: { type: "string", description: "User ID" },
          searchQuery: { type: "string", description: "Search by name" },
        },
        required: [],
      },
    },
    {
      name: "update_user",
      description: "Update user information",
      inputSchema: {
        type: "object",
        properties: {
          userId: { type: "string", description: "User ID" },
          name: { type: "string", description: "New name" },
          email: { type: "string", description: "New email" },
          phoneNumber: { type: "string", description: "New phone number" },
        },
        required: ["userId"],
      },
    },
    {
      name: "delete_user",
      description: "Delete a user",
      inputSchema: {
        type: "object",
        properties: {
          userId: { type: "string", description: "User ID to delete" },
        },
        required: ["userId"],
      },
    },
    {
      name: "list_all_users",
      description: "List all users",
      inputSchema: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  ];

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools }));

  server.setRequestHandler(CallToolRequestSchema, async (request: any) => {
    const { name, arguments: args } = request.params as { name: string, arguments: any };

    try {
      let result;

      if (name === "create_user") {
        result = await database.createUser(args.name, args.email, args.phoneNumber);
      } else if (name === "read_user") {
        result = await database.readUser(args.userId, args.searchQuery);
      } else if (name === "update_user") {
        result = await database.updateUser(args.userId, args.name, args.email, args.phoneNumber);
      } else if (name === "delete_user") {
        result = await database.deleteUser(args.userId);
      } else if (name === "list_all_users") {
        result = await database.readUser();
      } else {
        return { content: [{ type: "text", text: `Unknown tool: ${name}` }], isError: true };
      }

      return {
        content: [
          {
            type: "text",
            text: result.success
              ? `✓ ${result.message}\n${result.data ? JSON.stringify(result.data, null, 2) : ""}`
              : `✗ Error: ${result.error}`,
          },
        ],
        isError: !result.success,
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `Error: ${error instanceof Error ? error.message : "Unknown error"}` }],
        isError: true,
      };
    }
  });

  const transport = new StdioServerTransport();
  server.connect(transport);
}

startServer().catch((error) => {
  // Log errors to stderr only, never to stdout (which breaks MCP protocol)
  console.error("Error starting MCP server:", error instanceof Error ? error.message : String(error));
  process.exit(1);
});
