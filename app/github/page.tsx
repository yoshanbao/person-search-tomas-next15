import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Code2 } from 'lucide-react'

export default function GitHubPage() {
  const repoUrl = "https://github.com/yoshanbao/person-search-tomas-next15"
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">GitHub Repository</h1>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Github className="h-5 w-5 flex-shrink-0" />
              Yoshanbao on GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-sm sm:text-base text-muted-foreground">
              View the complete source code for the Yoshanbao project on GitHub. 
              This repository contains all the code, configurations, and documentation for the application.
            </p>
            <div className="space-y-4">
              <Button asChild size="sm" className="w-full text-sm">
                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Code2 className="h-5 w-5 flex-shrink-0" />
              Repository Contents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-sm">📁 Project Structure</h4>
                <pre className="bg-muted p-3 sm:p-4 rounded overflow-x-auto text-xs leading-relaxed">
{`yoshanbao/
├── app/
│   ├── actions/
│   ├── components/
│   ├── directory/
│   ├── about/
│   ├── github/
│   ├── database/
│   └── layout.tsx
├── components/
│   ├── ui/
│   └── theme-provider
├── public/
├── docs/
├── package.json
└── tsconfig.json`}
                </pre>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-sm">🔧 Key Technologies</h4>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Next.js 16 with App Router</li>
                  <li>React 19 with Server Components</li>
                  <li>TypeScript for type safety</li>
                  <li>TanStack React Table</li>
                  <li>Tailwind CSS</li>
                  <li>Shadcn/ui components</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Star className="h-5 w-5 flex-shrink-0" />
              Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>✅ Complete CRUD operations</li>
              <li>✅ Advanced datatable</li>
              <li>✅ Real-time search</li>
              <li>✅ Dark/light theme</li>
              <li>✅ Responsive design</li>
              <li>✅ Form validation</li>
              <li>✅ Server-side rendering</li>
              <li>✅ Type-safe development</li>
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
