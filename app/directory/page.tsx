import { getAllUsers } from '@/app/actions/actions'
import { DirectoryTableWrapper } from '@/app/components/directory-table-wrapper'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { UserFormDialog } from '@/app/components/user-form-dialog'

export default async function DirectoryPage() {
  const users = await getAllUsers()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Directory
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage all contacts and people in your directory
            </p>
          </div>
          <UserFormDialog>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Person
            </Button>
          </UserFormDialog>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6">
          <DirectoryTableWrapper users={users} />
        </div>
      </div>
    </div>
  )
}
