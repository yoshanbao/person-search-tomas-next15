# Person Search - MCP-Enabled Application

A modern full-stack application that enables Claude Desktop to perform database CRUD operations through the Model Context Protocol (MCP).

## 🎯 Project Overview

**Yoshanbao** is a person directory application with integrated MCP server that allows Claude AI to:
- ✅ Create new person records
- ✅ Search and retrieve person information
- ✅ Update person details
- ✅ Delete person records
- ✅ List all persons in the database

## 🏗️ Architecture

### Frontend (Next.js 16)
- Modern React 19 with Server Components
- TypeScript for type safety
- Tailwind CSS for styling
- Shadcn/ui components for UI
- Pages:
  - `/` - Home with search interface
  - `/directory` - Full contact directory
  - `/mcp-setup` - Setup instructions
  - `/mcp-demo` - Live MCP demo
  - `/about` - Application info with MCP details
  - `/github` - Repository links
  - `/database` - Database documentation

### MCP Server (Node.js + TypeScript)
- **Location**: `mcp-server/` directory
- **Protocol**: Model Context Protocol (stdio transport)
- **Database**: PostgreSQL via Prisma v7
- **Validation**: Zod schemas
- **Tools**: 5 MCP tools for complete CRUD operations

### Database
- **Provider**: Neon (PostgreSQL)
- **ORM**: Prisma 7.7.0 with PG adapter
- **Model**: User (id, name, email, phoneNumber, createdAt, updatedAt)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm package manager
- PostgreSQL database (Neon or local)
- Claude Desktop application

### Installation

1. **Clone and setup the main application**:
```bash
git clone <repository-url>
cd person-search-tomas-next15
pnpm install
```

2. **Setup MCP Server**:
```bash
cd mcp-server
pnpm install
```

3. **Configure environment variables**:
Create `.env` in `mcp-server/` directory:
```
DATABASE_URL=postgresql://user:password@host/dbname
NODE_ENV=production
```

4. **Build MCP Server**:
```bash
cd mcp-server
pnpm build
```

5. **Configure Claude Desktop**:
Edit `~/.claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["/path/to/person-search-tomas-next15/mcp-server/dist/index.js"],
      "env": {
        "DATABASE_URL": "your-database-url"
      }
    }
  }
}
```

Restart Claude Desktop after configuration.

## 📖 Usage

### Web Application
```bash
cd person-search-tomas-next15
pnpm dev
# Open http://localhost:3000
```

### MCP Server (Testing)
```bash
cd mcp-server
pnpm start
```

### With Claude Desktop
Once configured, you can interact with the MCP server:

```
"Create a new person named Alice Smith with email alice@example.com and phone 0422018632"

"Search for all persons named Alice"

"Update person with ID xyz with new email newemail@example.com"

"Delete person with ID xyz"

"List all persons in the database"
```

## 🛠️ MCP Server Details

### Available Tools

#### 1. `create_user`
Creates a new person in the database.

**Parameters**:
- `name` (string, required): Person's name (min 2 characters)
- `email` (string, required): Valid email address
- `phoneNumber` (string, required): Australian format (04xxxxxxxx)

**Example**:
```
Create user: John Doe, john@example.com, 0422018632
```

#### 2. `read_user`
Retrieves person by ID or searches by name.

**Parameters**:
- `userId` (string, optional): Specific person ID
- `searchQuery` (string, optional): Search by name

**Example**:
```
Search for users named "John"
Get user with ID abc123
```

#### 3. `update_user`
Updates person information.

**Parameters**:
- `userId` (string, required): ID of person to update
- `name` (string, optional): New name
- `email` (string, optional): New email
- `phoneNumber` (string, optional): New phone number

**Example**:
```
Update user abc123 with email newemail@example.com
```

#### 4. `delete_user`
Removes a person from the database.

**Parameters**:
- `userId` (string, required): ID of person to delete

**Example**:
```
Delete user abc123
```

#### 5. `list_all_users`
Lists all persons in the database.

**Parameters**: None

**Example**:
```
Show me all users
```

## 📁 Project Structure

```
person-search-tomas-next15/
├── app/                          # Next.js app directory
│   ├── components/               # React components
│   │   ├── navbar.tsx           # Navigation with MCP links
│   │   ├── data-table.tsx       # Data table component
│   │   └── ...
│   ├── mcp-setup/               # MCP setup guide page
│   ├── mcp-demo/                # MCP demo page
│   ├── directory/               # Directory page
│   ├── about/                   # About page (with MCP section)
│   ├── github/                  # GitHub repositories page
│   ├── actions/                 # Server actions
│   └── layout.tsx               # Root layout
├── components/                   # Shared components
│   └── ui/                       # shadcn/ui components
├── mcp-server/                   # MCP Server (separate project)
│   ├── src/
│   │   ├── index.ts             # MCP server entry point
│   │   ├── database.ts          # Database operations
│   │   └── schemas.ts           # Zod validation schemas
│   ├── prisma/
│   │   └── schema.prisma        # Prisma schema
│   ├── dist/                    # Compiled output
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                     # Environment variables
├── docs/                        # Documentation
├── public/                      # Static assets
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🔧 Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Accessible component library
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **TanStack React Table** - Data tables

### Backend & MCP
- **Node.js** - Runtime
- **TypeScript** - Language
- **@modelcontextprotocol/sdk** - MCP protocol implementation
- **Prisma 7.7** - ORM with PG adapter
- **PostgreSQL** - Database
- **Zod** - Input validation

### DevTools
- **pnpm** - Package manager (monorepo)
- **ESLint** - Code linting
- **Next Themes** - Dark/light mode
- **Sonner** - Toast notifications

## 📚 Documentation Pages

### `/mcp-setup`
Complete step-by-step guide including:
- Prerequisites
- Installation instructions
- Environment configuration
- Build process
- Claude Desktop integration
- Troubleshooting

### `/mcp-demo`
Interactive demonstration showing:
- Example MCP operations
- Expected results
- How the MCP server works
- Feature overview
- Links to setup guide

### `/github`
Repository information including:
- Main application repository
- MCP server repository
- Technologies used
- Contributing guidelines
- Related resources

### `/about`
Updated with:
- Project overview
- Technology stack
- Architecture details
- **NEW**: MCP Integration section with capabilities and tech stack
- Quick navigation links

## 🧪 Testing

### Test MCP Server Locally
```bash
cd mcp-server
pnpm dev
```

### Test in Claude Desktop
1. Configure as described above
2. Open Claude Desktop
3. Try any of the example prompts
4. Check responses include database operations

### Validate Database
```bash
cd mcp-server
npx prisma studio
```

## 🚢 Deployment

### Build for Production
```bash
# Main application
pnpm build
pnpm start

# MCP Server
cd mcp-server
pnpm build
```

### Environment Setup
- Set `NODE_ENV=production`
- Ensure `DATABASE_URL` points to production database
- Update Claude Desktop config with production MCP server path

## 🐛 Troubleshooting

### MCP Server Won't Start
- Verify DATABASE_URL is set correctly
- Check PostgreSQL is running
- Ensure all dependencies are installed: `pnpm install`

### Claude Can't Find MCP Server
- Verify path in `~/.claude_desktop_config.json` is correct
- Make sure `dist/index.js` exists: `pnpm build`
- Restart Claude Desktop completely

### Database Connection Errors
- Check network connectivity to database host
- Verify credentials in DATABASE_URL
- For Neon, ensure IP is whitelisted

### Build Errors
- Clear cache: `pnpm store prune`
- Reinstall: `rm -rf node_modules && pnpm install`
- Check TypeScript version: `pnpm tsc --version`

## 📝 API Reference

### Server Actions (Frontend)
- `searchUsers(query)` - Search persons
- `getAllUsers()` - Fetch all persons
- `addUser(data)` - Create person
- `updateUser(id, data)` - Update person
- `deleteUser(id)` - Delete person

### MCP Tools (Claude Desktop)
See "MCP Server Details" section above for complete tool documentation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a demonstration of MCP integration with Next.js and Claude Desktop.

## 📞 Support

For issues, questions, or suggestions:
- Check the `/mcp-setup` page for setup help
- See `/mcp-demo` for usage examples
- Visit the GitHub repositories for code details
- Review the troubleshooting section above

---

**Ready to use Claude to manage your person directory!** 🚀

Visit the application at http://localhost:3000 (development) or your deployed URL.
