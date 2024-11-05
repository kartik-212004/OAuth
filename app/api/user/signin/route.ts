import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"
import { z } from "zod"

const prisma = new PrismaClient()
const validation = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const result = validation.safeParse({ email: email, password: password })
  if (!result.success) {
    return NextResponse.json({ message: result.error.errors[0].message })
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    return NextResponse.json({ message: "Email is already taken." })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const value = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })
  return NextResponse.json({
    status: result.success,
    message: "Account Successfully Created",
  })
}
