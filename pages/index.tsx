import { Button, Container, Row, Text, Col, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { TextLoop } from "react-text-loop-next";
import Cursor from "../components/cursor";
// import "../styles/button.css";
const Home: NextPage = () => {
  const messages = ["☀️"];
  // const { messages } = props;
  // Default to the first message passed

  return (
    <Col
      dir="column"
      css={{
        marginTop: "$10",
        marginLeft: "$10",
      }}
    >
      <motion.div
        transition={{
          ease: "easeInOut",
          duration: 2,
        }}
        initial={{ opacity: 0, y: 90 }}
        animate={{
          opacity: [0, 0.5, 1],
          y: [90, 0, 0],
        }}
      >
        <Text
          h1
          size={80}
          css={{
            // linearGradient: "45deg, $blue500 -20%, $pink500 50%",
            width: "110px",
            padding: "$4",
            marginLeft: "$4",
            borderRadius: "$rounded",
            //
          }}
          weight="bold"
        >
          {messages[0]}
        </Text>
      </motion.div>
      <Text
        size={24}
        css={{
          fontWeight: "$medium",
          color: "WhiteSmoke",
          letterSpacing: "$wide",
          // fontFamily: "$mono",
        }}
      >
        Anoushk Kharangate
      </Text>
      <Row gap={1.2}>
        <Text
          css={{
            // color: "WhiteSmoke",
            letterSpacing: "$wide",
            fontWeight: "$medium",
            color: "$gray600",
          }}
        >
          sevnteen. serial builder.
        </Text>
        <Text
          css={{
            color: "transparent",
            "&:hover": {
              color: "rgb(255, 139, 65)",
            },
            "&:active": {
              background: "$black",
            },
            "&:focus": {
              borderColor: "$black",
            },
          }}
        >
          helphumanbehuman
        </Text>
      </Row>
      <Text
        css={{
          // color: "WhiteSmoke",
          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
        }}
      >
        <Link
          css={{
            color: "LightGoldenRodYellow",
          }}
          href="mailto:hey@anoushk.xyz"
        >
          hey@anoushk.xyz
        </Link>
      </Text>

      <Text
        css={{
          // color: "WhiteSmoke",
          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
        }}
      >
        {"anoushk dot sol anoushk dot eth"}
      </Text>
      <Text
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
          }}
          href="https://twitter.com/anoushk77"
        >
          thoughts
        </Link>
      </Text>
      <Text
        css={{
          // color: "WhiteSmoke",
          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
        }}
      >
        <Link css={{ color: "$gray600" }} href="https://metapasshq.xyz">
          metapass
        </Link>
      </Text>
      <Text
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
          }}
          href="https://github.com/anoushk1234"
        >
          the cool shit
        </Link>
      </Text>
      <Text
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
          }}
          href="https://anoushk.medium.com"
        >
          blog
        </Link>
      </Text>
      <Text
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
          }}
          href="/about"
        >
          about
        </Link>
      </Text>
      <Button
        css={{
          marginLeft: "$10",
          marginTop: "$15",
        }}
        size="xl"
        shadow
        color="primary"
        auto
      >
        Gm 🌈
      </Button>
      {/* <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple500 -20%, $pink500 100%",
        }}
        weight="bold"
      >
        My name is Anoushk
      </Text> */}
      {/* <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
        }}
        weight="bold"
      >
        Prettier
      </Text> */}
    </Col>
  );
};

export default Home;
