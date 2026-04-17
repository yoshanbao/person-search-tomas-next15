import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-6 sm:mb-8">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Project Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <p className="text-sm sm:text-base">
          Yoshanbao is a modern person directory application built with the latest web technologies. 
          It provides a powerful interface for managing, searching, and displaying contact information with a clean, intuitive design.
        </p>
        <p className="text-sm sm:text-base">
          This project demonstrates best practices in full-stack development, including server-side rendering, 
          real-time filtering, complete CRUD operations, and responsive design principles.
        </p>
      </CardContent>
    </Card>
  )
}

function TechnologyStack() {
  return (
    <Card className="mb-6 sm:mb-8">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Technology Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Frontend</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>• <strong>Next.js 16</strong> - React framework</li>
              <li>• <strong>React 19</strong> - UI library</li>
              <li>• <strong>TypeScript</strong> - Type-safe development</li>
              <li>• <strong>Tailwind CSS</strong> - Utility-first styling</li>
              <li>• <strong>Shadcn/ui</strong> - Accessible components</li>
              <li>• <strong>TanStack React Table</strong> - Datatable</li>
              <li>• <strong>React Hook Form</strong> - Form management</li>
              <li>• <strong>Zod</strong> - Schema validation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2 sm:mb-3 text-primary text-sm sm:text-base">Backend & Tools</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>• <strong>Server Actions</strong> - Backend operations</li>
              <li>• <strong>In-Memory Storage</strong> - Data persistence</li>
              <li>• <strong>pnpm</strong> - Package manager</li>
              <li>• <strong>ESLint</strong> - Code quality</li>
              <li>• <strong>Next-themes</strong> - Dark/light mode</li>
              <li>• <strong>Sonner</strong> - Toast notifications</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Architecture() {
  return (
    <Card className="mb-6 sm:mb-8">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">App Architecture</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
          <div>
            <h4 className="font-semibold mb-2 text-sm">Pages & Routes</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><code>/</code> - Home page with user search</li>
              <li><code>/directory</code> - Contact directory</li>
              <li><code>/mcp-setup</code> - MCP server setup guide</li>
              <li><code>/mcp-demo</code> - Live MCP CRUD demo</li>
              <li><code>/github</code> - GitHub repositories</li>
              <li><code>/about</code> - App info</li>
              <li><code>/database</code> - Database docs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm">Key Components</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Navbar</strong> - Navigation with theme</li>
              <li><strong>DataTable</strong> - Table with pagination</li>
              <li><strong>User Forms</strong> - Add/edit dialogs</li>
              <li><strong>MutableDialog</strong> - Reusable dialog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm">Server Actions</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><code>searchUsers()</code> - Search contacts</li>
              <li><code>getAllUsers()</code> - Fetch all</li>
              <li><code>addUser()</code> - Create contact</li>
              <li><code>updateUser()</code> - Edit contact</li>
              <li><code>deleteUser()</code> - Remove contact</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MCPIntegration() {
  return (
    <Card className="mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">🔧 MCP Integration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm sm:text-base">
          This app includes a complete Model Context Protocol (MCP) server that enables Claude Desktop to perform full CRUD operations on the Person database.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-sm">MCP Capabilities</h4>
            <ul className="space-y-1 text-xs sm:text-sm ml-4 list-disc">
              <li>Create new persons</li>
              <li>Search persons by name/ID</li>
              <li>Update person information</li>
              <li>Delete persons</li>
              <li>List all persons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-sm">Tech Stack</h4>
            <ul className="space-y-1 text-xs sm:text-sm ml-4 list-disc">
              <li>@modelcontextprotocol/sdk</li>
              <li>Prisma v7 with PG adapter</li>
              <li>PostgreSQL (Neon)</li>
              <li>TypeScript</li>
              <li>Zod validation</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <Button asChild size="sm" className="text-xs sm:text-sm">
            <Link href="/mcp-setup">Setup Guide</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
            <Link href="/mcp-demo">Live Demo</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4">
      <Button asChild size="sm" className="text-xs sm:text-sm">
        <Link href="https://www.linkedin.com/in/callumbir/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> LinkedIn
        </Link>
      </Button>
      <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
        <Link href="https://github.com/gocallum" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> GitHub
        </Link>
      </Button>
      <Button asChild variant="secondary" size="sm" className="text-xs sm:text-sm">
        <Link href="https://x.com/callumbir">
          <Twitter className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Contact
        </Link>
      </Button>
    </div>
  )
}

function QuickLinks() {
  return (
    <Card className="mb-6 sm:mb-8">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Quick Navigation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Button asChild variant="ghost" className="justify-start text-sm sm:text-base">
            <Link href="/database">
              Database Structure <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start text-sm sm:text-base">
            <Link href="/github">
              GitHub Repository <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">About Yoshanbao</h1>
        <ProjectOverview />
        <TechnologyStack />
        <MCPIntegration />
        <Architecture />
        <QuickLinks />
        <Button asChild variant="link" className="mt-4 text-xs sm:text-sm">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </main>
    </div>
  )
}

