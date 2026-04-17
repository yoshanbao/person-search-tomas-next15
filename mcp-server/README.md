# MCP Server for Person Search Database

This folder contains the Model Context Protocol (MCP) server implementation for the Person Search database.

## Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build the server:
   ```bash
   pnpm build
   ```

3. Start the server:
   ```bash
   pnpm start
   ```

## Configuration

Set the following environment variables:
- `DATABASE_URL`: PostgreSQL connection string (shared with main app)
- `NODE_ENV`: Set to "production" for production deployments

## Tools Available

- `create_user`: Create a new user
- `read_user`: Retrieve user(s) by ID, search by name, or get all users
- `update_user`: Update user information
- `delete_user`: Delete a user

## Integration with Claude

See `docs/mcp-server-setup.md` in the main project for Claude integration instructions.
