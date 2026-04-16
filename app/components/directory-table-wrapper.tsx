'use client'

import { DataTable } from '@/app/components/data-table'
import { createColumns } from '@/app/components/directory-columns'
import { User } from '@/app/actions/schemas'

interface DirectoryTableWrapperProps {
  users: User[]
}

export function DirectoryTableWrapper({ users }: DirectoryTableWrapperProps) {
  const columns = createColumns()

  return <DataTable columns={columns} data={users} />
}
