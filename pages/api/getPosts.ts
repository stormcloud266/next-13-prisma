// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") return res.status(403).end();

  try {
    const data = await prisma.user.create({ data: { name: "Tawnee" } });
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).end();
  }
}
