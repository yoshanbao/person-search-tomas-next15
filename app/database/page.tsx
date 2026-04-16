import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, BookOpen, Lightbulb } from 'lucide-react'

export default function DatabasePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Database Structure</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Schema
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-muted-foreground">
              Currently, Yoshanbao uses an in-memory data structure to store contact information. 
              Future versions will integrate Prisma ORM with a relational database for persistent storage.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">User Schema (TypeScript/Zod)</h4>
                <pre className="bg-muted p-4 rounded overflow-x-auto text-xs">
{`interface User {
  id: string           // Unique identifier (UUID)
  name: string         // Contact full name (min 2 characters)
  email: string        // Email address (valid format)
  phoneNumber: string  // Australian phone number (04xxxxxxxx format)
}

// Validation Schema
const userSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phoneNumber: z.string().regex(/^04\\d{8}$/, { 
    message: "Phone number must be a valid Australian mobile number" 
  }),
})`}
                </pre>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Data Operations</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono text-xs mb-1"><strong>CREATE:</strong> addUser(data)</p>
                    <p className="text-muted-foreground">Generates UUID and stores new contact in memory</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono text-xs mb-1"><strong>READ:</strong> getAllUsers() / getUserById(id)</p>
                    <p className="text-muted-foreground">Retrieves all contacts or specific user by ID</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono text-xs mb-1"><strong>UPDATE:</strong> updateUser(id, data)</p>
                    <p className="text-muted-foreground">Modifies existing contact with new data</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono text-xs mb-1"><strong>DELETE:</strong> deleteUser(id)</p>
                    <p className="text-muted-foreground">Removes contact from storage</p>
                  </div>
                  <div className="bg-muted p-3 rounded">
                    <p className="font-mono text-xs mb-1"><strong>SEARCH:</strong> searchUsers(query)</p>
                    <p className="text-muted-foreground">Filters contacts by name prefix matching</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Key Enhancement: TanStack React Table (DataTable)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Implementation Details</h4>
                <p className="text-sm mb-4">
                  I integrated <strong>TanStack React Table (formerly React Table)</strong> to provide an advanced data grid solution 
                  that significantly improves the directory page user experience.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-primary font-semibold">✓</span>
                    <div>
                      <p className="font-semibold text-sm">Pagination</p>
                      <p className="text-sm text-muted-foreground">Displays 10 results per page with intuitive navigation</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-semibold">✓</span>
                    <div>
                      <p className="font-semibold text-sm">Real-time Search</p>
                      <p className="text-sm text-muted-foreground">Instant filtering by contact name as you type</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-semibold">✓</span>
                    <div>
                      <p className="font-semibold text-sm">Column Sorting</p>
                      <p className="text-sm text-muted-foreground">Click headers to sort by name, email, or phone</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-semibold">✓</span>
                    <div>
                      <p className="font-semibold text-sm">CRUD Actions</p>
                      <p className="text-sm text-muted-foreground">Edit and delete buttons integrated in each row</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-semibold">✓</span>
                    <div>
                      <p className="font-semibold text-sm">Responsive Design</p>
                      <p className="text-sm text-muted-foreground">Adapts seamlessly to mobile and desktop screens</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded">
                <h4 className="font-semibold mb-2">Implementation Files</h4>
                <ul className="text-sm space-y-1 list-disc ml-4">
                  <li><code>app/components/data-table.tsx</code> - Main datatable component</li>
                  <li><code>app/components/directory-columns.tsx</code> - Column definitions and actions</li>
                  <li><code>app/components/directory-table-wrapper.tsx</code> - Server/client component bridge</li>
                  <li><code>app/directory/page.tsx</code> - Directory page using the datatable</li>
                </ul>
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
