import { Col, Link, Loading, Row, Text } from "@nextui-org/react";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { createClient } from "redis";
import useSWR from "swr";
const base =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? "https://anoushk.xyz"
    : "http://localhost:3000";
const API = base + "/api/projects";
const redisClient = createClient({
  username: "default",
  password: process.env.REDISPASSWORD,
  url: process.env.REDIS_URL,
});

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((r) => r.data)
    .catch((e) => e.message);
const Projects: NextPage = ({ fallback }: any) => {
  const { data, error } = useSWR(API);

  console.log(fallback[API], "fallback");
  const [projects, setProjects] = useState(
    data || fallback[API]?.data?.records
  );
  if (error) return <div>failed to load</div>;
  console.log(projects, "projects");
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
                href={
                  "/projects/" + decodeURIComponent(record.fields.Name).trim()
                }
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
  !redisClient.isOpen &&
    redisClient.connect().then(() => {
      console.log("redis connected", redisClient.isOpen);
    });
  const data = await redisClient.get("projects");
  if (data) {
    console.log("data from redis");
    return {
      props: {
        fallback: {
          [API]: JSON.parse(data),
        },
      }, // will be passed to the page component as props
    };
  } else {
    console.log("data from api");
    const recs = await fetcher(API);
    //   if (error) return "An error has occurred.";
    //   if (!data) return "Loading...";

    await redisClient.set("projects", JSON.stringify(recs));
    await redisClient.expire("projects", 3600);
    return {
      props: {
        fallback: {
          [API]: recs,
        },
      }, // will be passed to the page component as props
    };
  }
}
