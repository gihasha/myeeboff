import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await new Promise<any>(
      (resolve, reject) => {

        cloudinary.uploader
          .upload_stream(
            {
              folder: "dasun-kalhara-users"
            },
            (error, result) => {

              if (error) reject(error);

              else resolve(result);

            }
          )
          .end(buffer);

      }
    );

    return NextResponse.json({
      success: true,
      imageUrl: result.secure_url
    });

  } catch (error) {

    return NextResponse.json(
      {
        error: "Upload Failed"
      },
      {
        status: 500
      }
    );

  }
              }
