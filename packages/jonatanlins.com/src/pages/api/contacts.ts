import axios from "axios";
import { NextApiRequest as Request, NextApiResponse as Response } from "next";

export type MessageData = {
  name?: string;
  contact?: string;
  message?: string;
};

const apiKey: string = process.env.TELEGRAM_API_KEY;
const chatId: string = process.env.TELEGRAM_ADMIN_ID;

function createMessageText(data: MessageData): string {
  return `
NOVO CONTATO

Nome: ${data.name}
Contato: ${data.contact}

${data.message}
`;
}

async function controller(request: Request, response: Response): Promise<void> {
  if (request.method === "POST") {
    const data: MessageData = request.body;

    const text: string = createMessageText(data);

    await axios.get(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
      params: { chat_id: chatId, text },
    });

    response.status(200).json(data);
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed`);
  }
}

export default controller;
