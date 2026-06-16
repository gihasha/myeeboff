import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/hash";

export async function POST(
  req: Request
) {

  const body =
    await req.json();

  const user =
    await prisma.user.findUnique({
      where:{
        email:body.email
      }
    });

  if(!user){
    return NextResponse.json(
      {error:"Invalid Login"},
      {status:401}
    );
  }

  const valid =
    await verifyPassword(
      body.password,
      user.password
    );

  if(!valid){
    return NextResponse.json(
      {error:"Invalid Login"},
      {status:401}
    );
  }

  return NextResponse.json({
    success:true,
    user
  });
      }
