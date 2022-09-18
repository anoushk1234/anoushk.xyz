import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  const { data } = await axios.get(
    "https://api.airtable.com/v0/appgrx0CkGStO1umk/Table%201/" + id,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEILTABLE}`,
      },
    }
  );
  res.status(200).json({ data });
}
