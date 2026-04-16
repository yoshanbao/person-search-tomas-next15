'use client'

import { ColumnDef } from "@tanstack/react-table"
import { User } from "@/app/actions/schemas"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { deleteUser } from "@/app/actions/actions"
import { useState } from "react"
import { UserEditDialog } from "./user-edit-dialog"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const createColumns = (): ColumnDef<User>[] => [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("phoneNumber")}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original
      const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
      const [isDeleting, setIsDeleting] = useState(false)
      const router = useRouter()

      const handleDelete = async () => {
        try {
          setIsDeleting(true)
          await deleteUser(user.id)
          toast.success("User deleted successfully")
          router.refresh()
        } catch (error) {
          toast.error("Failed to delete user")
          console.error(error)
        } finally {
          setIsDeleting(false)
        }
      }

      const handleEditComplete = () => {
        setIsEditDialogOpen(false)
        router.refresh()
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <UserEditDialog
            user={user}
            open={isEditDialogOpen}
            onOpenChange={(open) => {
              if (!open) {
                handleEditComplete()
              } else {
                setIsEditDialogOpen(open)
              }
            }}
          />
        </>
      )
    },
  },
]
