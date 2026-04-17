#!/bin/bash
# Quick setup script for the MCP Server

echo "Setting up Claude MCP Server for Person Search Database..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please edit .env with your DATABASE_URL"
    echo ""
fi

# Install dependencies
echo "Installing dependencies..."
pnpm install

# Build the server
echo "Building server..."
pnpm build

echo ""
echo "✓ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env with your DATABASE_URL if you haven't already"
echo "2. Run 'pnpm start' to start the MCP server"
echo "3. Configure Claude to use this server (see ../docs/mcp-server-setup.md)"
