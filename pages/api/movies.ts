import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://bush-cinema.onrender.com/api/cinema/movies");
    const data = await response.json();
    res.status(200).json(data); // отдаём фронту
  } catch (error) {
    res.status(500).json({ error: "Ошибка при запросе к API" });
  }
}
