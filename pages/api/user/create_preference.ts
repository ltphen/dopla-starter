// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { savePreferences } from "@/lib/sqlite";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { Ollama } from 'ollama'

const conversation = [{ role: 'system', content: 'You are an english tutor' }]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const {userId} = getAuth(req)
    if (!userId) {
        return res.status(401).send("Unauthorized");
    }

    console.log(req.body)
    const response = await savePreferences(userId||"", req.body)

    res.json(response)
}
