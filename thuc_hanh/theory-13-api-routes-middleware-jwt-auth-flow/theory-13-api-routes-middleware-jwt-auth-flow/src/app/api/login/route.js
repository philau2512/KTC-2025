import { users } from "@/lib/users";
import { signToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

// Backend API
export async function POST(req) {
  const { username, password } = await req.json();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return NextResponse.json({ error: "Invalid" }, { status: 401 });

  const token = await signToken({ id: user.id, username: user.username });
  console.log("Created Token:", token);
  const res = NextResponse.json({ success: true });

  res.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60,
    path: "/",
  });

  return res;
}
