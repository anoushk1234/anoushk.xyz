import { Button, Col, Divider, Row, Text, Image } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ArticleComponent from "../../components/ArticleComponent";
// import { ConnectWallet } from "../../components/ct";

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [address, setAddress] = React.useState("");
  return (
    <Col>
      <Row justify="space-between">
        {" "}
        <Text
          h2
          style={{
            // fontSize: "4rem",
            margin: "1rem",
            marginLeft: "3rem",
            // display: "table-caption",
            paddingLeft: "1rem",
            textAlign: "center",
          }}
        >
          {"Blog."}
        </Text>
        <Button
          style={{
            margin: "1rem",
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
          }}
          css={{
            opacity: "0",
            "&:hover": {
              opacity: "1",
            },
          }}
          icon={
            <Image
              src="/phantom.svg"
              alt="phantom"
              width="100%"
              height="100%"
            />
          }
        >
          {/* <ConnectWallet setAddress={setAddress} noToast={false}>
            {(address.length > 0 &&
              address.substring(0, 5) +
                "..." +
                address.substring(35, address.length - 5)) ||
              "Connect Wallet"}
          </ConnectWallet> */}
        </Button>
      </Row>

      <Divider />
      <ArticleComponent id={id as string} />
    </Col>
  );
};

export default Article;
