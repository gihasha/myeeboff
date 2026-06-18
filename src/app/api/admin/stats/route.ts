import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const users =
    await prisma.user.count();

  const requests =
    await prisma.contactRequest.count();

  const services =
    await prisma.service.count();

  return NextResponse.json({
    users,
    requests,
    services
  });
}
