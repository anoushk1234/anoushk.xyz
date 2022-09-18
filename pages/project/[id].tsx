import { Col, Row, Loading, Text, Button, Image } from "@nextui-org/react";
import axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fs } from "nextjs-components";
import useSWR from "swr";

const base =
  process.env.NEXT_PUBLIC_ENV === "prod"
    ? "https://anoushk.xyz"
    : "http://localhost:3000";
const API = base + "/api/builds";
const fetcher = (url: string) =>
  axios
    .get(url)
    .then((r) => r.data)
    .catch((e) => e.message);
export async function getServerSideProps(context: any) {
  //   console.log(API + context.query.id, "API");
  const recs = await fetcher(API + "/" + context.query.id);
  //   console.log(recs, "reco");
  return {
    props: {
      fallback: {
        [API]: recs,
      },
    }, // will be passed to the page component as props
  };
}
const ProjectPage: NextPage = ({ fallback }: any) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(API);
  const [ss, setSS] = useState("");
  const [build, setBuild] = useState(data || fallback[API]?.data);
  console.log(build, "build");
  useEffect(() => {
    async function getImage() {
      const { data } = await axios.post("/api/ss", {
        site: build?.fields["URL"],
      });
      console.log(data, "data");
      setSS(data.pic);
    }
    getImage();
  }, [build]);
  return (
    <Col
      style={{
        padding: "2rem",
      }}
    >
      <Row>
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
          {build?.fields?.Name}
        </Text>
      </Row>
      <fs.Fieldset
        style={{
          border: "2px solid #303030",
          margin: "1rem",
          padding: "1rem",
          borderRadius: "5px",
          maxWidth: "60%",
        }}
      >
        <fs.Content>
          <Row>
            <button
              style={{
                all: "unset",
                cursor: "pointer",
              }}
              onClick={() => {
                window.open(build?.fields?.URL);
              }}
            >
              <fs.Fieldset
                style={{
                  border: "2px solid #303030",
                  margin: "1rem",
                  // padding: "1rem",
                  borderRadius: "5px",
                  width: "fit-content",
                  // height: "fit-content",
                  // height: "435px",
                  // width: "272px",
                }}
              >
                {/* <iframe
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://www.gitsol.xyz/"
            /> */}
                {/* <Image
                showSkeleton
                width={435}
                height={272}
                maxDelay={10000}
                src="http://www.deelay.me/10000/https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                //   alt="Default Image"
              /> */}
                <Image
                  css={{
                    "&:hover": {
                      opacity: 0.5,
                    },
                  }}
                  showSkeleton={true}
                  src={`data:image/png;base64,${ss}`}
                  width={435}
                  height={272}
                  maxDelay={10000}
                ></Image>
              </fs.Fieldset>
            </button>
            <Col>
              <Text>{build.fields.URL}</Text>
              <Button
                style={{
                  borderRadius: "5px",
                  fontWeight: "500",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                Action
              </Button>
            </Col>
          </Row>
        </fs.Content>
      </fs.Fieldset>

      {/* <Col
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
  </Col> */}
    </Col>
  );
};

export default ProjectPage;
