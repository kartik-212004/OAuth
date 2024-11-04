import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const existingMail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!existingMail) {
    return NextResponse.json({ message: "Incorrect Email", status: false })
  }

  const isPasswordValid = await bcrypt.compare(password, existingMail.password)

  if (isPasswordValid) {
    return NextResponse.json({ message: "Login Successful", status: true })
  } else {
    return NextResponse.json({ message: "Incorrect Password", status: false })
  }
}
