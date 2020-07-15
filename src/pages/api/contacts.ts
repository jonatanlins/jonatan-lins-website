import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface MessageData {
  name: string;
  contact: string;
  message: string;
}

const apiKey = process.env.TELEGRAM_API_KEY;
const chat_id = process.env.TELEGRAM_ADMIN_ID;

function composeTextMessage({ name, contact, message }: MessageData) {
  return `
NOVO CONTATO

Nome: ${name}
Contato: ${contact}

${message}
`;
}

async function controller(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const text = composeTextMessage(request.body);

    await axios.get(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
      params: { chat_id, text },
    });

    response.status(200).json(request.body);
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}

export default controller;
