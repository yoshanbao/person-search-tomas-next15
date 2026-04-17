'use client';

import Footer from '@/app/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export default function MCPDemoPage() {
  const [activeDemo, setActiveDemo] = useState<'create' | 'read' | 'update' | 'delete'>('create');

  const demos = {
    create: {
      title: 'Create User via MCP',
      description: 'Ask Claude to create a new person in the database',
      prompt: '"Create a user named Alice Smith with email alice@smith.com and phone 0422018632"',
      expected: 'Creates a new user record with generated ID',
      screenshot: '/demo-create.png',
    },
    read: {
      title: 'Read/Search Users via MCP',
      description: 'Retrieve users by ID or search by name',
      prompt: '"Search for all users named Alice" or "Get user with ID abc123xyz"',
      expected: 'Returns matching user records or specific user',
      screenshot: '/demo-read.png',
    },
    update: {
      title: 'Update User via MCP',
      description: 'Modify user information',
      prompt: '"Update user abc123xyz with new email newemail@example.com"',
      expected: 'Updates user record and returns modified data',
      screenshot: '/demo-update.png',
    },
    delete: {
      title: 'Delete User via MCP',
      description: 'Remove user from database',
      prompt: '"Delete user with ID abc123xyz"',
      expected: 'Removes user and confirms deletion',
      screenshot: '/demo-delete.png',
    },
  };

  const current = demos[activeDemo];

  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Badge className="mb-4">Live Demo</Badge>
              <h1 className="text-4xl font-bold mb-4">MCP CRUD Operations Demo</h1>
              <p className="text-lg text-gray-600">
                See how the MCP server performs real-time database operations through Claude
              </p>
            </div>

            {/* Demo Navigation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {(Object.keys(demos) as Array<keyof typeof demos>).map((key) => (
                <Button
                  key={key}
                  onClick={() => setActiveDemo(key)}
                  variant={activeDemo === key ? 'default' : 'outline'}
                  className="w-full"
                >
                  {demos[key].title.split(' ')[0]}
                </Button>
              ))}
            </div>

            {/* Current Demo */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>{current.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-gray-700">{current.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Example Prompt</h3>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded font-mono text-sm">
                    {current.prompt}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Expected Result</h3>
                  <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                    {current.expected}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How It Works</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>User sends message to Claude Desktop</li>
                    <li>Claude recognizes it's a database operation</li>
                    <li>Claude invokes the MCP tool (create_user, read_user, update_user, or delete_user)</li>
                    <li>MCP server connects to PostgreSQL database</li>
                    <li>Database operation is performed with validation</li>
                    <li>Result is returned to Claude and displayed</li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>MCP Server Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Full CRUD operations (Create, Read, Update, Delete)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Input validation using Zod schemas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Search functionality (by name or ID)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Error handling with detailed messages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Prisma ORM with PostgreSQL adapter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 font-bold">✓</span>
                    <span>Type-safe TypeScript implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>Try It Yourself</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  To test the MCP server live:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>
                    <Link href="/mcp-setup" className="text-blue-600 hover:underline">
                      Follow the setup guide
                    </Link>
                  </li>
                  <li>Open Claude Desktop</li>
                  <li>Try one of the example prompts above</li>
                  <li>Watch the MCP server perform real database operations</li>
                </ol>
                <Button asChild className="mt-4">
                  <Link href="/mcp-setup">Go to Setup Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
