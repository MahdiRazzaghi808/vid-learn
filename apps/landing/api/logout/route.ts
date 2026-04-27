import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();

  cookieStore.set("UT", "", {
    path: "/",
    domain: ".senro.ir",
    expires: new Date(0),
    httpOnly: true,
  });

  cookieStore.set("URT", "", {
    path: "/",
    domain: ".senro.ir",
    expires: new Date(0),
    httpOnly: true,
  });

  return NextResponse.json({ success: true });
}
