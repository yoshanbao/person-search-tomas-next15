import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Code2 } from 'lucide-react'

export default function GitHubPage() {
  const repoUrl = "https://github.com/yourusername/yoshanbao"
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">GitHub Repository</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              Yoshanbao on GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              View the complete source code for the Yoshanbao project on GitHub. 
              This repository contains all the code, configurations, and documentation for the application.
            </p>
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Visit GitHub Repository
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              Repository Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">📁 Project Structure</h4>
                <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
{`yoshanbao/
├── app/
│   ├── actions/          # Server actions (CRUD operations)
│   ├── components/       # React components
│   ├── directory/        # Directory page with datatable
│   ├── about/           # About page
│   ├── github/          # GitHub page
│   ├── database/        # Database documentation
│   └── layout.tsx       # Root layout
├── components/
│   ├── ui/              # Shadcn/ui components
│   └── theme-provider   # Theme configuration
├── public/              # Static assets
├── docs/                # Documentation
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🔧 Key Technologies</h4>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Next.js 16 with App Router</li>
                  <li>React 19 with Server Components</li>
                  <li>TypeScript for type safety</li>
                  <li>TanStack React Table for data management</li>
                  <li>Tailwind CSS for styling</li>
                  <li>Shadcn/ui for accessible components</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>✅ Complete CRUD operations for contacts</li>
              <li>✅ Advanced datatable with search and pagination</li>
              <li>✅ Real-time search functionality</li>
              <li>✅ Dark/light theme support</li>
              <li>✅ Responsive design</li>
              <li>✅ Form validation with Zod</li>
              <li>✅ Server-side rendering with Next.js</li>
              <li>✅ Type-safe development with TypeScript</li>
            </ul>
          </CardContent>
        </Card>

        <Button asChild variant="link" className="mt-4">
          <Link href="/about">
            Back to About
          </Link>
        </Button>
      </main>
    </div>
  )
}
