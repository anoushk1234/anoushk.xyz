import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { site } = req.body;

  try {
    const { data } = await axios.post("https://screenshot.up.railway.app/", {
      site,
    });
    res.status(200).json({ pic: data.pic });
  } catch (e) {
    let error = e as Error;
    console.log(error, "error");
    res.status(500).json({ error: error.message });
  }
}
