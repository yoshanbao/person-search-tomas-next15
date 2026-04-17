import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, Code2 } from 'lucide-react'

export default function GitHubPage() {
  const repos = [
    {
      name: "Person Search (Next.js 15)",
      url: "https://github.com/yoshanbao/person-search-tomas-next15",
      description: "Full-stack application with MCP server integration for Claude Desktop CRUD operations",
      features: ["MCP Server", "Next.js 16", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"]
    },
    {
      name: "Person Search MCP Server",
      url: "https://github.com/yoshanbao/person-search-mcp-server", 
      description: "Standalone MCP server for complete database CRUD operations via Claude Desktop",
      features: ["MCP Protocol", "Prisma v7", "PostgreSQL", "Zod Validation", "TypeScript"]
    }
  ]
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">GitHub Repositories</h1>

        {repos.map((repo) => (
          <Card key={repo.name} className="mb-6 sm:mb-8">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Github className="h-5 w-5 flex-shrink-0" />
                    {repo.name}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">{repo.description}</p>
                </div>
                <Button asChild size="sm" className="text-xs sm:text-sm">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    View
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {repo.features.map((feature) => (
                  <span key={feature} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Code2 className="h-5 w-5 flex-shrink-0" />
              MCP Integration Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-xs sm:text-sm">
            <p>
              The Person Search application features a complete Model Context Protocol (MCP) integration that allows Claude Desktop to perform database operations through natural language.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">MCP Tools Available</h4>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>create_user</li>
                  <li>read_user</li>
                  <li>update_user</li>
                  <li>delete_user</li>
                  <li>list_all_users</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Database Validation</h4>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Email format validation</li>
                  <li>Australian phone format</li>
                  <li>Minimum name length</li>
                  <li>Unique email constraint</li>
                </ul>
              </div>
            </div>
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
