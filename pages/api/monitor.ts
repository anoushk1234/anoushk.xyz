import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  console.log(id);
  const { data } = await axios.get(
    "https://betteruptime.com/api/v2/monitors/" + id,
    {
      headers: {
        Authorization: `Bearer ${process.env.UPTIME}`,
      },
    }
  );
  const { data: responsetimes } = await axios.get(
    "https://betteruptime.com/api/v2/monitors/" + id + "/response-times",
    {
      headers: {
        Authorization: `Bearer ${process.env.UPTIME}`,
      },
    }
  );
  res.status(200).json({ data: data, responsetimes: responsetimes });
}
