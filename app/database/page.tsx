import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, BookOpen, Lightbulb } from 'lucide-react'

export default function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Database Structure</h1>

        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Database className="h-5 w-5 flex-shrink-0" />
              Data Schema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Currently, Yoshanbao uses an in-memory data structure to store contact information. 
              Future versions will integrate Prisma ORM with a relational database for persistent storage.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-3">User Schema (TypeScript/Zod)</h4>
                <pre className="bg-muted p-3 sm:p-4 rounded overflow-x-auto text-xs leading-relaxed">
{`interface User {
  id: string
  name: string
  email: string
  phoneNumber: string
}

const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().regex(
    /^04\\d{8}$/
  ),
})`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold text-sm sm:text-base mb-3">Data Operations</h4>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono font-semibold mb-1"><strong>CREATE:</strong> addUser(data)</p>
                    <p className="text-muted-foreground text-xs">Generates UUID and stores new contact</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono font-semibold mb-1"><strong>READ:</strong> getAllUsers() / getUserById(id)</p>
                    <p className="text-muted-foreground text-xs">Retrieves contacts</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono font-semibold mb-1"><strong>UPDATE:</strong> updateUser(id, data)</p>
                    <p className="text-muted-foreground text-xs">Modifies existing contact</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono font-semibold mb-1"><strong>DELETE:</strong> deleteUser(id)</p>
                    <p className="text-muted-foreground text-xs">Removes contact from storage</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono font-semibold mb-1"><strong>SEARCH:</strong> searchUsers(query)</p>
                    <p className="text-muted-foreground text-xs">Filters contacts by name</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Inspiration & Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm">
              The implementation of the TanStack React Table datatable was inspired by best practices learned during my 
              <strong> coursework with Professor</strong>, who emphasized the importance of:
            </p>
            <ul className="space-y-2 text-sm">
              <li><span className="text-primary font-semibold">→</span> Building scalable, reusable components</li>
              <li><span className="text-primary font-semibold">→</span> Separating concerns between client and server components</li>
              <li><span className="text-primary font-semibold">→</span> Implementing efficient data management patterns</li>
              <li><span className="text-primary font-semibold">→</span> Creating user-friendly interfaces with proper pagination and search</li>
              <li><span className="text-primary font-semibold">→</span> Using TypeScript for type safety throughout the application</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground italic">
              This approach ensures the application is maintainable, extensible, and provides an excellent user experience.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Future Enhancements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>🔄 Integrate Prisma ORM for database persistence</li>
              <li>🗄️ Set up PostgreSQL/MySQL database</li>
              <li>🔐 Add user authentication with AuthJS</li>
              <li>📊 Implement advanced filtering and bulk operations</li>
              <li>🌍 Add API routes for external integrations</li>
              <li>📱 Mobile app version</li>
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
