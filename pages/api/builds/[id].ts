import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const { data } = await axios.get(
      "https://api.airtable.com/v0/appgrx0CkGStO1umk/Table%201/" + id,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEILTABLE}`,
        },
      }
    );
    // console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error });
  }
}
