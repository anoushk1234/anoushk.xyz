import { Button, Container, Row, Text, Col, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import { TextLoop } from "react-text-loop-next";
import Cursor from "../components/cursor";
// import "../styles/button.css";
const About: NextPage = () => {
  const messages = ["🏄‍♂️", "🚴‍♂️", "🎸", "🧗‍♂️", "⚽️", "👨‍💻"];
  const [messageIndex, setMessageIndex] = React.useState(0);
  // const { messages } = props;
  // Default to the first message passed
  useEffect(() => {
    // Move on to the next message every `n` milliseconds
    let timeout: any;
    if (messageIndex < messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(messageIndex + 1), 1000);
    }
    if (messageIndex === messages.length - 1) {
      timeout = setTimeout(() => setMessageIndex(0), 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messages, messageIndex]);
  return (
    <Col
      dir="column"
      css={{
        marginTop: "$10",
        marginLeft: "$10",
        marginBottom: "$xl",
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
          {messages[messageIndex]}
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
            fontWeight: "$bold",
            color: "GhostWhite",
          }}
        >
          About
        </Text>
      </Row>
      <Text
        css={{
          // color: "WhiteSmoke",
          marginRight: "50px",
          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
          whiteSpace: "pre-line",
        }}
      >
        {`I won my first hackathon at 16 and \n started my first company at 17.\n blew up my school in 9th grade science experiment,\n we tried to make an engine run on hydrogen lol \n built things with raspis/arduinos like auto gas leak detectors that turn off the stove \n\n\n `}
      </Text>
      <Text
        css={{
          // color: "WhiteSmoke",

          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
          whiteSpace: "pre-line",
          wordBreak: "break-word",
          marginRight: "50px",
        }}
      >
        {` these days im hacking around with solana's validator infra and protocols,\n\n i like to work on hard problems and uncharted territories(unknown unknowns), innovation lies in this quadrant.\n\n hence i like to read about systems engineering, distributed systems, networking, algos and data structures, cryptography etc\n\n currently I'm building a diet client for Solana that can validate transactions without trusting super majority and without the need to run a full node.`}
      </Text>
      <Text
        css={{
          // color: "WhiteSmoke",

          letterSpacing: "$wide",
          fontWeight: "$medium",
          color: "$gray600",
          whiteSpace: "pre-line",
        }}
      >
        i don't consider any language better, they're all different tools in the
        toolbelt but rust 🦀 is my personal favorite, don't tell typescript 😛
      </Text>
      <Text
        size={24}
        css={{
          fontWeight: "$medium",
          color: "WhiteSmoke",
          letterSpacing: "$wide",
          // fontFamily: "$mono",
        }}
      >
        Now
      </Text>
      <ul>
        <li>
          <Text
            css={{
              // color: "WhiteSmoke",
              marginTop: "$12",
              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            living in{" "}
            <Link href="/goa">
              <u>Goa</u>
            </Link>
          </Text>
        </li>
        <li>
          <Text
            css={{
              // color: "WhiteSmoke",
              marginTop: "$12",
              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            building{" "}
            <Link href="https://github.com/solana-foundation/solana-improvement-documents/pull/10">
              <u>diet-client</u>
            </Link>
          </Text>
        </li>
      </ul>
      <Text
        size={24}
        css={{
          fontWeight: "$medium",
          color: "WhiteSmoke",
          letterSpacing: "$wide",
          // fontFamily: "$mono",
        }}
      >
        Past
      </Text>
      <ul>
        <li
          style={{
            display: "list-item",
          }}
        >
          <Text
            css={{
              // color: "WhiteSmoke",

              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            Built some fun products with{" "}
            <Link href="https://twitter.com/makerdock_">makerdock</Link>
          </Text>
        </li>
        <li
          style={{
            display: "list-item",
          }}
        >
          <Text
            css={{
              // color: "WhiteSmoke",

              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            Contributed to metaplex, solana cookbook, coral, anchor,
            switchboard, jito solana and more{" "}
          </Text>
        </li>
        <li
          style={{
            display: "list-item",
          }}
        >
          <Text
            css={{
              // color: "WhiteSmoke",

              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            Built and exited my startup app.metapasshq.xyz - we had more than
            2.5k users, 10k+ USD in revenue, 14 events
          </Text>
        </li>

        <li
          style={{
            display: "list-item",
          }}
        >
          <Text
            css={{
              // color: "WhiteSmoke",

              letterSpacing: "$wide",
              fontWeight: "$medium",
              color: "$gray600",
              whiteSpace: "pre-line",
            }}
          >
            2x Hackathon Winner (Solana x Filecoin 2022, Polygon Buidl It 2021)
          </Text>
        </li>
      </ul>
      {/* <Text
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
      </Text> */}
      {/* <Text
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
      </Button> */}
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

export default About;
