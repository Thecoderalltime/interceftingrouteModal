import { getAllPhotos } from "@/app/utils";
import { NextResponse } from "next/server";

export async function GET() {
  const photo = await getAllPhotos();
  return NextResponse.json(photo);
}
