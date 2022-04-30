import {
  Button,
  Container,
  Row,
  Text,
  Col,
  Link,
  Image,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";
import { TextLoop } from "react-text-loop-next";
import Cursor from "../components/cursor";
// import "../styles/button.css";
const Goa: NextPage = () => {
  return (
    <Col
      dir="column"
      css={{
        marginTop: "$10",
        marginLeft: "15%",
        alignContent: "center",
      }}
    >
      <Image
        css={{
          width: "70%",
          height: "70%",
        }}
        src="assets/IMG_1442_xpucnu.png"
      ></Image>
      <video
        autoPlay
        loop
        muted
        style={{ width: "70%", height: "70%", marginTop: "10%" }}
      >
        <source src="assets/IMG_0885.mp4" />
      </video>
    </Col>
  );
};

export default Goa;
