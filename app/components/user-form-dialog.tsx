'use client'

import { addUser } from '@/app/actions/actions'
import { userFormSchema, UserFormData, User } from '@/app/actions/schemas'
import { UserForm } from './user-form'
import MutableDialog, { ActionState } from '@/components/mutable-dialog'
import { useState, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface UserFormDialogProps {
  children: ReactNode
}

export function UserFormDialog({ children }: UserFormDialogProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleAddUser = async (data: UserFormData): Promise<ActionState<User>> => {
    try {
      const newUser = await addUser(data)
      setOpen(false)
      router.refresh()
      return {
        success: true,
        message: `User ${newUser.name} added successfully`,
        data: newUser,
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to add user: ' + (error instanceof Error ? error.message : String(error)),
      }
    }
  }

  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleAddUser}
      triggerComponent={children}
      editDialogTitle="Add New Person"
      dialogDescription="Add a new person to your directory."
      submitButtonLabel="Add Person"
      defaultValues={{
        name: '',
        email: '',
        phoneNumber: '',
      }}
      open={open}
      onOpenChange={setOpen}
    />
  )
}
