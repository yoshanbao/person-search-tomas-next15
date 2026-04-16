import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react'

function ProjectOverview() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Yoshanbao is a modern person directory application built with the latest web technologies. 
          It provides a powerful interface for managing, searching, and displaying contact information with a clean, intuitive design.
        </p>
        <p className="mb-4">
          This project demonstrates best practices in full-stack development, including server-side rendering, 
          real-time filtering, complete CRUD operations, and responsive design principles.
        </p>
      </CardContent>
    </Card>
  )
}

function TechnologyStack() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Technology Stack</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-primary">Frontend</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Next.js 16</strong> - React framework with App Router</li>
              <li>• <strong>React 19</strong> - UI library with server components</li>
              <li>• <strong>TypeScript</strong> - Type-safe development</li>
              <li>• <strong>Tailwind CSS</strong> - Utility-first styling</li>
              <li>• <strong>Shadcn/ui</strong> - Accessible component library</li>
              <li>• <strong>TanStack React Table</strong> - Powerful datatable solution</li>
              <li>• <strong>React Hook Form</strong> - Form state management</li>
              <li>• <strong>Zod</strong> - Schema validation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-primary">Backend & Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Next.js Server Actions</strong> - Backend operations</li>
              <li>• <strong>In-Memory Storage</strong> - Current data persistence</li>
              <li>• <strong>pnpm</strong> - Package manager</li>
              <li>• <strong>ESLint</strong> - Code quality</li>
              <li>• <strong>Next-themes</strong> - Dark/light mode support</li>
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
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>App Architecture</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Pages & Routes</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><code>/</code> - Home page with user search</li>
              <li><code>/directory</code> - Complete contact directory with datatable</li>
              <li><code>/about</code> - App architecture and technology stack</li>
              <li><code>/github</code> - GitHub repository link</li>
              <li><code>/database</code> - Database structure documentation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Key Components</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><strong>Navbar</strong> - Navigation with theme toggle</li>
              <li><strong>DataTable</strong> - TanStack-powered table with pagination and search</li>
              <li><strong>User Forms</strong> - Add and edit contact dialogs</li>
              <li><strong>MutableDialog</strong> - Reusable dialog component</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Server Actions</h4>
            <ul className="space-y-1 ml-4 list-disc">
              <li><code>searchUsers()</code> - Search contacts by name</li>
              <li><code>getAllUsers()</code> - Fetch all contacts</li>
              <li><code>addUser()</code> - Create new contact</li>
              <li><code>updateUser()</code> - Edit existing contact</li>
              <li><code>deleteUser()</code> - Remove contact</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <Link href="https://www.linkedin.com/in/callumbir/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Link>
      </Button>
      <Button asChild variant="outline">
        <Link href="https://github.com/gocallum" target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="https://x.com/callumbir">
          <Twitter className="mr-2 h-4 w-4" /> Contact Me
        </Link>
      </Button>
    </div>
  )
}

function QuickLinks() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Quick Navigation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Button asChild variant="ghost" className="justify-start">
            <Link href="/database">
              Database Structure <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" className="justify-start">
            <Link href="/github">
              GitHub Repository <ArrowRight className="ml-2 h-4 w-4" />
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
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">About Yoshanbao</h1>
        <ProjectOverview />
        <TechnologyStack />
        <Architecture />
        <QuickLinks />
        <Button asChild variant="link" className="mt-4">
          <Link href="/">
            Back to Home
          </Link>
        </Button>
      </main>
    </div>
  )
}

