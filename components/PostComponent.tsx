import { Col, Text, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
// import {  } from "nextjs-components";
import React from "react";
interface PostComponentProps {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
}

const PostComponent = (post: PostComponentProps) => {
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
        <Text color="$yellow500">{"LATEST — " + post.date}</Text>
        <Text
          h1
          css={{
            "@xs": {
              fontSize: "2rem",
            },
            "@sm": {
              fontSize: "3rem",
            },
            "@md": {
              fontSize: "7.4rem",
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
          color="$gray300"
          css={{
            fontSize: "1.8rem",
            // marginLeft: "0.2rem",
          }}
        >
          {post.description}
        </Text>
        <Text
          color="$gray600"
          css={{
            fontSize: "1.2rem",
          }}
        >
          {post.duration}
        </Text>
      </Col>
    </Col>
  );
};

export default PostComponent;
