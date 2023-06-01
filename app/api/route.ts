import { NextResponse } from "next/server";
import PiCamera from "pi-camera";

const camera = new PiCamera({
  mode: "photo",
  output: `/test.jpg`,
  width: 640,
  height: 480,
  nopreview: true,
});

export async function GET(request: Request) {
  camera
    .snap()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log("error", error);
    });

  return NextResponse.json({ text: "hello world!" });
}
