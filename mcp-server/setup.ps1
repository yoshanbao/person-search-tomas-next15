# Quick setup script for the MCP Server (Windows PowerShell)

Write-Host "Setting up Claude MCP Server for Person Search Database..." -ForegroundColor Green
Write-Host ""

# Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "Creating .env file from .env.example..."
    Copy-Item ".env.example" ".env"
    Write-Host "⚠️  Please edit .env with your DATABASE_URL" -ForegroundColor Yellow
    Write-Host ""
}

# Install dependencies
Write-Host "Installing dependencies..."
& pnpm install

# Build the server
Write-Host "Building server..."
& pnpm build

Write-Host ""
Write-Host "✓ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Edit .env with your DATABASE_URL if you haven't already"
Write-Host "2. Run 'pnpm start' to start the MCP server"
Write-Host "3. Configure Claude to use this server (see ../docs/mcp-server-setup.md)"
