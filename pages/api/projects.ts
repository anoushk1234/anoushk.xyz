// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hello");
  try {
    const { data } = await axios.get(
      "https://api.airtable.com/v0/appgrx0CkGStO1umk/Table%201",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEILTABLE}`,
        },
      }
    );
    console.log(data, "data");
    res.status(200).json({ data });
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error });
  }
}
