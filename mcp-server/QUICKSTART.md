# Quick Start Guide - Claude MCP Integration

## What Was Created

I've created a complete Model Context Protocol (MCP) server for your Person Search database. This allows Claude to perform CRUD operations directly on your database.

## File Structure

```
mcp-server/
├── src/
│   ├── index.ts          # Main MCP server implementation
│   ├── database.ts       # CRUD operations using Prisma
│   └── schemas.ts        # Zod validation schemas
├── prisma/
│   └── schema.prisma     # Database schema
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
├── setup.sh             # Linux/Mac setup script
├── setup.ps1            # Windows PowerShell setup script
└── README.md
```

## Quick Start (Windows)

### 1. Install MCP Server Dependencies
```powershell
cd mcp-server
./setup.ps1
```

This script will:
- Create `.env` from `.env.example`
- Install dependencies with `pnpm`
- Build the TypeScript code

### 2. Configure Environment
Edit `mcp-server/.env` and set your database URL:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/your-database
```

### 3. Start the MCP Server
```powershell
cd mcp-server
pnpm start
```

### 4. Configure Claude
For **Claude Desktop**, create or edit `~/.claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["C:\\Users\\Aaron Clerf\\OneDrive\\Documents\\yoshanbao\\person-search-tomas-next15\\mcp-server\\dist\\index.js"],
      "env": {
        "DATABASE_URL": "postgresql://user:password@localhost:5432/your-database"
      }
    }
  }
}
```

Then restart Claude.

## Available Claude Commands

Once configured, you can ask Claude things like:

- **"Create a user named Alice Smith with email alice@example.com and phone 0422018632"**
- **"Search for all users named Bob"**
- **"Show me the user with ID abc123xyz"**
- **"Update user abc123xyz with new email newemail@example.com"**
- **"Delete the user with ID abc123xyz"**

Claude will automatically use the MCP tools to perform these operations.

## Tools Provided

### 1. `create_user`
Creates a new user with validation
- Input: name, email, phoneNumber
- Validates: Email format, phone is Australian format (04xxxxxxxx)

### 2. `read_user`
Retrieves users by ID, search query, or all users
- Input: userId (optional) or searchQuery (optional)
- Returns: Single user, multiple users, or all users

### 3. `update_user`
Updates an existing user's information
- Input: userId (required) + any fields to update
- Validates: Same rules as create_user

### 4. `delete_user`
Deletes a user from the database
- Input: userId (required)

## Troubleshooting

**MCP Server won't start:**
- Ensure PostgreSQL is running and DATABASE_URL is correct
- Check that Node.js 18+ is installed
- Verify port 3001 (or configured port) is available

**Claude can't find the tools:**
- Restart Claude after updating config file
- Check config file path syntax (use forward slashes even on Windows)
- Ensure the dist/index.js file exists (run `pnpm build` if not)

**Database connection errors:**
- Verify DATABASE_URL format
- Test connection: `psql <your_database_url>`
- Run migrations if needed: `cd mcp-server && pnpm prisma migrate deploy`

## Full Documentation

See [docs/mcp-server-setup.md](../docs/mcp-server-setup.md) for detailed setup instructions.

## Next Steps

1. Run the setup script
2. Configure `.env` with your database
3. Start the MCP server
4. Update Claude's config file
5. Restart Claude and test!
