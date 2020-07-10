import axios from "axios";

const apiKey = process.env.TELEGRAM_API_KEY;
const chat_id = process.env.TELEGRAM_ADMIN_ID;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const text = `
NOVO CONTATO

Nome: ${data.name}
Contato: ${data.contact}

${data.message}
`;

    await axios.get(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
      params: { chat_id, text },
    });

    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
