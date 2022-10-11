import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";
const base = new Airtable({
  apiKey: process.env.NEILTABLE,
}).base(process.env.BASE!);
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    if (id && (id as string).startsWith("rec")) {
      const { data } = await axios.get(
        "https://api.airtable.com/v0/appgrx0CkGStO1umk/Table%201/" + id,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEILTABLE}`,
          },
        }
      );
      res.status(200).json({ data });
    } else {
      base("Table 1")
        .select({
          filterByFormula: `Name = "${capitalizeFirstLetter(id as string)}"`,
        })
        .firstPage(function (err, records) {
          let val = records?.flat()[0];
          if (err) res.status(500).json({ err });
          res
            .status(200) //@ts-ignore
            .json({ data: val?._rawJson });
        });
    }
    // console.log(data);
  } catch (error) {
    console.log((error as Error).message);
    res.status(500).json({ error });
  }
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
