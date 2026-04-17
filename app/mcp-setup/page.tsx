'use client';

import Footer from '@/app/components/footer';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MCPSetupPage() {
  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Badge className="mb-4">Setup Guide</Badge>
              <h1 className="text-4xl font-bold mb-4">Person Search MCP Server Setup</h1>
              <p className="text-lg text-gray-600">
                Complete step-by-step guide to set up the MCP server and integrate with Claude Desktop
              </p>
            </div>

            {/* Prerequisites */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Node.js 18+ installed</li>
                  <li>pnpm package manager</li>
                  <li>Claude Desktop application</li>
                  <li>PostgreSQL database (Neon or local)</li>
                  <li>Git for version control</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step-by-step instructions */}
            <Tabs defaultValue="step1" className="mb-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="step1">1. Clone</TabsTrigger>
                <TabsTrigger value="step2">2. Install</TabsTrigger>
                <TabsTrigger value="step3">3. Configure</TabsTrigger>
                <TabsTrigger value="step4">4. Build</TabsTrigger>
                <TabsTrigger value="step5">5. Integrate</TabsTrigger>
              </TabsList>

              <TabsContent value="step1" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Step 1: Clone the Repository</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Clone the person-search repository:</p>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto">
                      git clone https://github.com/your-username/person-search-tomas-next15.git
                      <br />
                      cd person-search-tomas-next15
                    </div>
                    <p className="text-sm text-gray-600">Replace `your-username` with your actual GitHub username</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step2" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Step 2: Install MCP Server Dependencies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Navigate to the MCP server directory and install dependencies:</p>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto">
                      cd mcp-server
                      <br />
                      pnpm install
                    </div>
                    <p className="text-sm text-gray-600">This installs all required packages including @modelcontextprotocol/sdk, Prisma, and Zod</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step3" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Step 3: Configure Environment Variables</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Create a `.env` file in the mcp-server directory:</p>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto">
                      DATABASE_URL=postgresql://user:password@localhost:5432/person-search-db
                      <br />
                      NODE_ENV=production
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Replace with your actual PostgreSQL connection string (Neon or local database)
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step4" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Step 4: Build the MCP Server</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Build the TypeScript code:</p>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto">
                      pnpm build
                    </div>
                    <p className="text-sm text-gray-600 mt-4">This generates the compiled JavaScript in the `dist/` folder</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="step5" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Step 5: Configure Claude Desktop</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Add the MCP server to Claude Desktop configuration:</p>
                    <p className="text-sm text-gray-600">
                      Edit `~/.claude_desktop_config.json` (create if doesn't exist):
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded font-mono text-sm overflow-x-auto">
                      {`{
  "mcpServers": {
    "person-search": {
      "command": "node",
      "args": ["${process.env.HOME}/path/to/person-search-tomas-next15/mcp-server/dist/index.js"],
      "env": {
        "DATABASE_URL": "your-database-url"
      }
    }
  }
}`}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">Restart Claude Desktop after updating the configuration</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Quick Test */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Test Your Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Once configured, you can test the MCP server in Claude Desktop by asking:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-mono text-sm">
                  <li>"Create a user named John Doe with email john@example.com and phone 0422018632"</li>
                  <li>"List all users in the database"</li>
                  <li>"Search for users named Alice"</li>
                  <li>"Update user ID abc123 with new email newemail@example.com"</li>
                  <li>"Delete user with ID abc123"</li>
                </ul>
              </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
              <CardHeader>
                <CardTitle>Troubleshooting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">MCP Server won't start</h4>
                  <p className="text-gray-700 text-sm">
                    Check that PostgreSQL is running and DATABASE_URL is correct. Verify the file path in Claude config.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Claude can't find the MCP server</h4>
                  <p className="text-gray-700 text-sm">
                    Restart Claude Desktop after updating config. Check that the path to dist/index.js is correct.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Database connection errors</h4>
                  <p className="text-gray-700 text-sm">
                    Verify your DATABASE_URL format and that your database is accessible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
