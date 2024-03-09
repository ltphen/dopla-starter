// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPreferences } from "@/lib/sqlite";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { Ollama } from 'ollama'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  const user = getAuth(req)
  const data = await getPreferences(user.userId??"")
  
  const conversation = [{ role: 'system', content: `
    You are an english tutor
    This is the user preferences
    Language Level: ${data ? data.languageLevel : "Beginner"}
    Objectives: ${data ? data.objectives : "Learn a lot"}
    Commitment: ${data ? data.commitment : "Everyday"}
  ` }]

  console.log(conversation)

  const ollama = new Ollama({ host: 'http://localhost:11434' })
  const response = await ollama.chat({
    model: 'gemma:2b',
    messages: [...conversation, ...req.body.conversation],
  })

  console.log(response, req.body.conversation)

  res.json(response.message)
}
