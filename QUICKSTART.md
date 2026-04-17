# 🚀 Quick Start Guide - MCP Server Setup

Get the MCP server running in 5 minutes!

## ⚡ Quick Setup

### 1. Build the MCP Server
```bash
cd mcp-server
pnpm install
pnpm build
```

✅ Check: Does `dist/index.js` exist?

### 2. Configure Environment
Create `mcp-server/.env`:
```
DATABASE_URL=postgresql://neondb_owner:npg_12QCytPFGwWf@ep-rapid-dew-ama06idq-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NODE_ENV=production
```

### 3. Configure Claude Desktop
Edit `~/.claude_desktop_config.json` (create if missing):

**Windows/Mac**:
```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["C:\\Users\\Aaron Clerf\\OneDrive\\Documents\\yoshanbao\\person-search-tomas-next15\\mcp-server\\dist\\index.js"],
      "env": {
        "DATABASE_URL": "your-database-url-here"
      }
    }
  }
}
```

Replace the path with your actual mcp-server path and DATABASE_URL.

### 4. Restart Claude Desktop
Close and reopen Claude Desktop completely.

## ✅ Test It Works

Open Claude Desktop and ask:
```
"Create a user named Test User with email test@example.com and phone 0422018632"
```

Expected response: User created with an ID

Then ask:
```
"List all users"
```

Expected response: Should show your new test user

## 🎯 Available Commands

In Claude, you can now say:

| Command | Example |
|---------|---------|
| **Create** | "Create user John Doe, john@example.com, 0422018632" |
| **Search** | "Find all users named John" or "Get user abc123" |
| **Update** | "Update user abc123 with email newemail@example.com" |
| **Delete** | "Delete user abc123" |
| **List All** | "Show all users in database" |

## 🔍 Verify Setup

### Check MCP Server is Built
```bash
cd mcp-server
ls dist/
# Should show: index.js, database.js, schemas.js
```

### Test MCP Server Locally
```bash
cd mcp-server
pnpm start
# Should see: "Person Search MCP server running on stdio transport"
# Press Ctrl+C to stop
```

### Check Database Connection
```bash
cd mcp-server
npx prisma studio
# Opens database UI - verify you can see Person table
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "Cannot find module @modelcontextprotocol/sdk" | Run `pnpm install` in mcp-server, then `pnpm build` |
| "MCP Server not in Claude" | Restart Claude Desktop completely (close all windows) |
| "Database connection error" | Check DATABASE_URL is correct and database is accessible |
| "dist/index.js doesn't exist" | Run `pnpm build` in mcp-server directory |
| "Permission denied" | Ensure dist/index.js has execute permissions |

## 📖 Full Documentation

- **Setup Details**: Visit `/mcp-setup` in the web app
- **Live Demo**: Visit `/mcp-demo` in the web app
- **Complete Guide**: See `MCP-README.md`

## 🎬 Next Steps

1. ✅ Build MCP server - `pnpm build`
2. ✅ Configure Claude Desktop
3. ✅ Test basic operations
4. 📖 Visit `/mcp-setup` and `/mcp-demo` pages in the app
5. 🚀 Deploy to production

## 📞 Need Help?

```bash
# Clear everything and restart
cd mcp-server
rm -rf node_modules dist
pnpm install
pnpm build

# Check the build worked
node dist/index.js  # Should hang (waiting for input) - Ctrl+C to stop
```

## ✨ That's it!

You should now be able to use Claude Desktop to create, read, update, and delete persons from your database naturally!

---

**For more details, see `/mcp-setup` page in the web application.**
