import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  const requests =
    await prisma.contactRequest.findMany({
      orderBy:{
        createdAt:"desc"
      }
    });

  return NextResponse.json(
    requests
  );
}
