import { Col, Row, Text } from "@nextui-org/react";
import axios from "axios";
import { NextPage } from "next";

import useSWR from "swr";
const API = "https://api.airtable.com/v0/appgrx0CkGStO1umk/Table%201";
const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEILTABLE}`,
    },
  }).then((r) => r.json());
const Projects: NextPage = ({ fallback }: any) => {
  //   console.log(records);
  const { data, error } = useSWR(API);
  return (
    <Col>
      <Row>
        {" "}
        <Text
          h1
          style={{
            // fontSize: "4rem",
            margin: "1rem",
            // display: "table-caption",
            textAlign: "center",
          }}
        >
          {"Projects."}
        </Text>
      </Row>
      <Row></Row>
    </Col>
  );
};
export default Projects;
export async function getServerSideProps(context: any) {
  const recs = await fetcher(API);
  //   if (error) return "An error has occurred.";
  //   if (!data) return "Loading...";
  return {
    props: {
      fallback: {
        [API]: recs,
      },
    }, // will be passed to the page component as props
  };
}
