# Claude MCP Server for Person Search Database

## Overview
This document describes how to set up a Model Context Protocol (MCP) server that allows Claude to perform CRUD operations on your person search database.

## Architecture

The MCP server is a standalone Node.js/TypeScript application that:
- Connects directly to your PostgreSQL database using Prisma
- Exposes four main tools: `create_user`, `read_user`, `update_user`, `delete_user`
- Validates all inputs using Zod schemas
- Runs on `localhost:3001` (or configurable port)

## Setup Instructions

### 1. Environment Variables
Add to your `.env` or `.env.local`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/person-search-db
MCP_SERVER_PORT=3001
```

### 2. Install MCP Server
The MCP server is located in the `mcp-server/` folder. Install dependencies:
```bash
cd mcp-server
pnpm install
```

### 3. Build the MCP Server
```bash
pnpm build
```

### 4. Start the MCP Server
```bash
pnpm start
```

### 5. Configure Claude to Use the MCP Server

#### Option A: Desktop Claude (Standalone)
Create or edit `~/.claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["/path/to/mcp-server/dist/index.js"],
      "env": {
        "DATABASE_URL": "postgresql://user:password@localhost:5432/person-search-db"
      }
    }
  }
}
```

#### Option B: Claude Web / VS Code
Follow the configuration guide at: https://modelcontextprotocol.io/docs/clients/claude-web

## Available Tools

### 1. Create User
Creates a new user in the database.
- **Input**: name (string), email (string), phoneNumber (string)
- **Validation**: Email must be valid, phone must be Australian format (04xxxxxxxx)
- **Returns**: User object with generated ID

### 2. Read User
Retrieves a user by ID or searches for users.
- **Inputs**: 
  - `userId` (optional): Get specific user
  - `searchQuery` (optional): Search users by name
- **Returns**: User object or array of users

### 3. Update User
Updates an existing user's information.
- **Input**: userId (string), updates (partial user object)
- **Validation**: Same validation rules as create
- **Returns**: Updated user object

### 4. Delete User
Deletes a user from the database.
- **Input**: userId (string)
- **Returns**: Success message

## Usage Example in Claude

Once configured, you can ask Claude:
- "Create a new user named John Doe with email john@example.com and phone 0422018632"
- "Search for all users named 'Alice'"
- "Update the user with ID abc123 to have email newemail@example.com"
- "Delete the user with ID abc123"

Claude will use the MCP tools to perform these database operations.

## Troubleshooting

### MCP Server won't start
- Check that PostgreSQL is running
- Verify DATABASE_URL is correct
- Check that port 3001 is available

### Database connection errors
- Ensure your PostgreSQL credentials are correct
- Run migrations if needed: `cd mcp-server && pnpm prisma migrate deploy`

### Claude can't find the tools
- Restart Claude application
- Check the config file path and syntax
- Verify the MCP server is running: `curl localhost:3001/health` (if health check is enabled)
