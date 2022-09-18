import {
  Col,
  Row,
  Loading,
  Text,
  Button,
  Image,
  Container,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
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
  const [githubLinks, setGithubLinks] = useState<string[]>([]);
  const [monitor, setMonitor] = useState({
    status: "",
    ping: 0,
  });
  const [build, setBuild] = useState(data || fallback[API]?.data);
  //   console.log(build, "build");
  useEffect(() => {
    async function getImage() {
      const { data } = await axios.post("/api/ss", {
        site: build?.fields["URL"],
      });
      //   console.log(data, "data");
      setSS(data.pic);
    }
    async function getGithubLinks(id: string) {
      const { data } = await axios.post("/api/github", {
        id,
      });
      //   console.log(data, "links");
      const gitlinks = Object.values(data.data.fields).filter(
        (t: any) => typeof t === "string" && t.startsWith("https")
      ) as string[];
      gitlinks.length > 0 && setGithubLinks(gitlinks);
      //   console.log(gitlinks, "gitlinks");
    }
    async function getMonitor(id: string) {
      const { data } = await axios.post("/api/monitor", {
        id,
      });
      //   console.log(data, "monitor");
      setMonitor({
        status: data.data.data.attributes.status,
        ping: data.responsetimes.data.attributes.regions[0].response_times[0]
          .response_time,
      });
    }

    build && getGithubLinks(build.fields["Github Links"][0]);
    build && getImage();
    build && getMonitor(build.fields["Monitors"]);
  }, [build]);
  return (
    <Col
      style={{
        padding: "2rem",
      }}
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row justify="center">
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
      <Text
        style={{
          color: "GrayText",
          margin: "2rem",
          textAlign: "center",
          lineHeight: "1.6rem",
          textTransform: "capitalize",
          fontWeight: "400",
          letterSpacing: "-0.02em",
          fontSize: "1.25rem",
        }}
      >
        {build?.fields?.Description}
      </Text>
      <fs.Fieldset
        style={{
          border: "2px solid #303030",
          margin: "1rem",
          padding: "1rem",
          borderRadius: "5px",
          width: "fit-content",
          maxWidth: "80%",
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
                  boxSizing: "content-box",

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
                {ss.length > 0 ? (
                  <Image
                    css={{
                      "&:hover": {
                        opacity: 0.5,
                      },
                      borderRadius: "0px",
                      objectFit: "fill",
                    }}
                    src={`data:image/png;base64,${ss}`}
                    width={485}
                    height={290}
                    maxDelay={10000}
                  ></Image>
                ) : (
                  <Image
                    style={{
                      borderRadius: "0px",
                    }}
                    showSkeleton
                    width={435}
                    height={272}
                    maxDelay={10000}
                    src="http://www.deelay.me/10000/https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                    //   alt="Default Image"
                  />
                )}
              </fs.Fieldset>
            </button>
            <Col
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Container
                css={{
                  marginTop: "1rem",
                }}
              >
                <Row justify="space-between" align="center">
                  <Col>
                    <Text
                      css={{
                        textTransform: "uppercase",
                        fontWeight: "500",
                        color: "#7c7c7c",
                        fontSize: "12px",
                        marginBottom: "1rem",
                      }}
                    >
                      Deployment
                    </Text>

                    <Text
                      css={{
                        width: "fit-content",
                        textDecoration: "unset",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        marginLeft: "0px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        fontSize: "0.875rem",
                        fontWeight: "400",
                        flexDirection: "row",
                        "&:hover": {
                          textDecoration: "underline",
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => window.open(build?.fields?.URL)}
                    >
                      {build.fields.URL.replace(/(^\w+:|^)\/\//, "").replace(
                        /\/$/,
                        ""
                      )}
                      <span
                        style={{
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      >
                        <svg
                          data-testid="geist-icon"
                          fill="none"
                          height="1em"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="1em"
                          className="link_externalIcon__lLA3x"
                          style={{
                            color: "currentcolor",
                          }}
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14L21 3"></path>
                        </svg>
                      </span>
                    </Text>
                  </Col>
                  {/* <div
                    style={{
                      marginLeft: "2rem",
                      minWidth: "15px",
                    }}
                    className={
                      monitor.status === "up" ? "circle" : "circle-red"
                    }
                  /> */}
                </Row>
              </Container>

              <Container
                css={{
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <Text
                  css={{
                    textTransform: "uppercase",
                    fontWeight: "500",
                    color: "#7c7c7c",
                    fontSize: "12px",
                    marginBottom: "1rem",
                  }}
                >
                  Status
                </Text>
                <Text
                  css={{
                    // border: "1px solid red",
                    textTransform: "capitalize",
                    marginLeft: "0rem",
                    width: "min-content",
                    textDecoration: "unset",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                    flexDirection: "row",
                    color:
                      monitor.status === "up"
                        ? "SpringGreen"
                        : monitor.status === "validating"
                        ? "orange"
                        : "red",
                  }}
                >
                  {monitor.status &&
                    monitor.status + " " + monitor.ping.toFixed(2) + "ms"}

                  {monitor.status === "" && <Loading type="spinner" />}
                </Text>
              </Container>
              <Col
                css={{
                  marginLeft: "1.5rem",
                }}
              >
                <>
                  <Text
                    css={{
                      textTransform: "uppercase",
                      fontWeight: "500",
                      color: "#7c7c7c",
                      fontSize: "12px",
                      marginBottom: "1rem",
                      marginLeft: "0.75rem",
                    }}
                  >
                    Github Links
                  </Text>

                  {githubLinks.length > 0 &&
                    githubLinks.map((link, i) => {
                      return (
                        <Text
                          key={i}
                          onClick={() => window.open(link)}
                          css={{
                            textDecoration: "unset",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            display: "flex",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: "0.875rem",
                            marginLeft: "0.75rem",
                            fontWeight: "400",
                            flexDirection: "row",
                            "&:hover": {
                              textDecoration: "underline",
                              cursor: "pointer",
                            },
                          }}
                        >
                          {link.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "")}{" "}
                          <span
                            style={{
                              marginTop: "5px",
                              marginLeft: "5px",
                            }}
                          >
                            <svg
                              data-testid="geist-icon"
                              fill="none"
                              height="1em"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="1em"
                              className="link_externalIcon__lLA3x"
                              style={{
                                color: "currentcolor",
                              }}
                            >
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14L21 3"></path>
                            </svg>
                          </span>
                        </Text>
                      );
                    })}
                </>
              </Col>
              {githubLinks.length !== 0 && (
                <Button
                  style={{
                    borderRadius: "5px",
                    fontWeight: "500",
                    marginTop: "1rem",
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => window.open(githubLinks[0])}
                  icon={<FaGithub size="20" color="black" />}
                >
                  See the code
                </Button>
              )}
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
