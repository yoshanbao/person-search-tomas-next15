//app/actions/actions.ts

'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'
import { cache } from 'react'
import { prisma } from '@/lib/prisma'

export async function searchUsers(query: string): Promise<User[]> {
    console.log('Searching users with query:', query)
    const results = await prisma.user.findMany({
        where: {
            name: {
                startsWith: query,
                mode: 'insensitive'
            }
        }
    })
    console.log('Search results:', results) 
    return results as User[]
}

export async function getAllUsers(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users as User[]
}

export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    const validatedData = userSchema.parse({ ...data, id: 'temp' })
    const newUser = await prisma.user.create({
        data: {
            name: validatedData.name,
            email: validatedData.email,
            phoneNumber: validatedData.phoneNumber
        }
    })
    revalidatePath('/directory') // Revalidate the directory page
    return newUser as User
}

export async function deleteUser(id: string): Promise<void> {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    if (!user) {
        throw new Error(`User with id ${id} not found`)
    }
    await prisma.user.delete({
        where: { id }
    })
    console.log(`User with id ${id} has been deleted.`)
    revalidatePath('/directory') // Revalidate the directory page
}

export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    if (!user) {
        throw new Error(`User with id ${id} not found`)
    }

    const updateData: any = {}
    if (data.name) updateData.name = data.name
    if (data.email) updateData.email = data.email
    if (data.phoneNumber) updateData.phoneNumber = data.phoneNumber

    const updatedUser = await prisma.user.update({
        where: { id },
        data: updateData
    })
    console.log(`User with id ${id} has been updated.`)
    revalidatePath('/directory') // Revalidate the directory page

    return updatedUser as User
}

export const getUserById = cache(async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return (user as User) || null
})
