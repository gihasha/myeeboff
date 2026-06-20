import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/hash";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const exists =
      await prisma.user.findUnique({
        where: {
          email: body.email
        }
      });

    if (exists) {
      return NextResponse.json(
        { error: "Email Exists" },
        { status: 400 }
      );
    }

    const password =
      await hashPassword(
        body.password
      );

    const user =
      await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password
        }
      });
    
    console.log("USER CREATED");

    return NextResponse.json({
      success: true,
      user
    });

  } catch (error: any) {

    return NextResponse.json(
      {
        error: error.message
      },
      {
        status: 500
      }
    );

  }
          }
