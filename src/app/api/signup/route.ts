import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(
  req: Request
) {

  const body = await req.json();

  const exists =
    await prisma.user.findUnique({
      where:{
        email:body.email
      }
    });

  if(exists){
    return NextResponse.json(
      {error:"Email Exists"},
      {status:400}
    );
  }

  const password =
    await hashPassword(
      body.password
    );

  await prisma.user.create({
    data:{
      name:body.name,
      email:body.email,
      password
    }
  });

  return NextResponse.json({
    success:true
  });
                           }
