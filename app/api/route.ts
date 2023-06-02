import { NextResponse } from "next/server";
import PiCamera from "pi-camera";

export const dynamic = "force-dynamic";

export async function GET() {
  const camera = new PiCamera({
    mode: "photo",
    width: 640,
    height: 480,
    nopreview: true,
  });

  const result = await camera.snapDataUrl().catch((error) => {
    console.log("error with camera: " + error);
    return null;
  });

  return NextResponse.json(result);
}
