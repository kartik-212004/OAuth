import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
const prisma = new PrismaClient()
const validation = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
})


export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  console.log(email, password)
  const result = validation.safeParse({ email: email, password: password })
  console.log(result.success)
  if (!result.success) {
    console.log(result.error.errors[0].message)
    return NextResponse.json({ message: result.error.errors[0].message })
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    return NextResponse.json(
      { message: "Email is already taken." }
    )
  }
  const value = await prisma.user.create({
    data: {
      email,
      password,
    },
  })
  console.log(value)
  return NextResponse.json({
    status: result.success,
    message: "Account Successfully Created",
  })
}
