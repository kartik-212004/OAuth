import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const existingMail = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  const existingPassword = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  })
  if (existingMail) {
    if (existingPassword) {
      return NextResponse.json({ message: "Login Successful" })
    }
    return NextResponse.json({ message: "Incorrect Password" })
  }
  return NextResponse.json({ message: "Incorrect Email" })
}
