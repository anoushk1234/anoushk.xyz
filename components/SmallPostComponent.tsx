import { Col, Text, Container, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
// import {  } from "nextjs-components";
import React from "react";
interface SmallPostComponentProps {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
}

const SmallPostComponent = (post: SmallPostComponentProps) => {
  const router = useRouter();
  return (
    <Col
      onClick={() => router.push("/blog/" + post.id)}
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
        marginLeft: "3rem",
        alignItems: "flex-start",
        padding: "1rem",
      }}
      css={{
        cursor: "pointer",
      }}
    >
      <Col>
        <Text
          h1
          css={{
            "@xs": {
              fontSize: "2rem",
            },
            "@sm": {
              fontSize: "3.4rem",
            },

            margin: "-0.2rem",
            cursor: "pointer",
            "&:hover": {
              opacity: "0.6",
            },
          }}
        >
          {post.title}
        </Text>
        <Text
          color="$gray200"
          css={{
            fontSize: "1.8rem",
            // marginLeft: "0.2rem",
          }}
        >
          {post.description}
        </Text>
        <Row
          css={{
            alignItems: "center",
          }}
        >
          <Text color="$yellow500">{post.date + "  —  "}</Text>
          <Text
            color="$gray600"
            css={{
              fontSize: "1.2rem",
            }}
          >
            {post.duration}
          </Text>
        </Row>
      </Col>
    </Col>
  );
};

export default SmallPostComponent;
