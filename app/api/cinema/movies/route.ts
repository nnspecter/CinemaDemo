import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() {
  try {
    const response = await fetch("https://bush-cinema.onrender.com/api/cinema/movies");
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Ошибка при запросе к API" }, { status: 500 });
  }
}
