import { Col, Link, Loading, Row, Text } from "@nextui-org/react";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import useSWR from "swr";
const base =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? "https://anoushk.xyz"
    : "http://localhost:3000";
const API = base + "/api/projects";
const fetcher = (url: string) =>
  axios
    .get(url)
    .then((r) => r.data)
    .catch((e) => e.message);
const Projects: NextPage = ({ fallback }: any) => {
  const { data, error } = useSWR(API);

  // console.log(fallback[API]);
  const [projects, setProjects] = useState(
    data || fallback[API]?.data?.records
  );
  if (error) return <div>failed to load</div>;
  console.log(projects);
  return (
    <Col>
      <Row>
        {" "}
        <Text
          h1
          style={{
            // fontSize: "4rem",
            margin: "1rem",
            marginLeft: "1.6rem",
            // display: "table-caption",
            textAlign: "center",
          }}
        >
          {"Projects."}
        </Text>
      </Row>
      <Col
        style={{
          margin: "1rem",
        }}
      >
        {projects ? (
          projects.map((record: any) => (
            <Text
              key={record.id}
              css={{
                // color: "WhiteSmoke",
                letterSpacing: "$wide",
                fontWeight: "$medium",
                color: "$gray600",
              }}
            >
              <Link
                css={{
                  color: "$gray600",
                  "&:hover": {
                    color: "$primary",
                  },
                }}
                href={"/project/" + record.id}
              >
                {record.fields.Name}
              </Link>
            </Text>
          ))
        ) : (
          <Loading
            style={{
              margin: "1rem",
            }}
            type="points"
          />
        )}
      </Col>
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
