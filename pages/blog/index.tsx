import {
  Button,
  Col,
  Row,
  Text,
  Image,
  Divider,
  Container,
} from "@nextui-org/react";
import React from "react";
import { ConnectWallet } from "../../components/ct";
// import ModalComponent from "../../components/modal";
import PostComponent from "../../components/PostComponent";
import SmallPostComponent from "../../components/SmallPostComponent";

const Blog = () => {
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
          <ConnectWallet setAddress={setAddress} noToast={false}>
            {(address.length > 0 &&
              address.substring(0, 5) +
                "..." +
                address.substring(35, address.length - 5)) ||
              "Connect Wallet"}
          </ConnectWallet>
        </Button>
      </Row>

      <Divider />
      <Container
        style={{
          marginBottom: "0rem",
          marginLeft: "0rem",
          marginRight: "0rem",
          padding: "0rem",
          transform: "translateY(1rem)",
        }}
      >
        <PostComponent
          id="solana-diet-client"
          title="Solana Diet Client"
          description="you only need one"
          date="DEC 1, 2021"
          duration="1 min read"
        />
      </Container>
      <Container
        style={{
          // marginTop: "1rem",
          marginBottom: "0rem",
          marginLeft: "0rem",
          marginRight: "0rem",
          padding: "0rem",
          transform: "translateY(10rem)",
        }}
      >
        <Row
          css={{
            display: "flex",
            alignItems: "center",
          }}
          // style={{
          //   transform: "translateY(1rem)",
          // }}
        >
          <Text
            // h4
            style={{
              // fontSize: "4rem",
              margin: "1rem",
              marginLeft: "2rem",
              // display: "table-caption",
              paddingLeft: "1rem",
            }}
            css={{
              textAlign: "center",
              fontWeight: "$semibold",
              flex: "1",
              // "@sm": {
              //   fontSize: "$tiny",
              // },
              // "@md": {
              //   fontSize: "1.5rem",
              // },
            }}
          >
            {"More Issues"}
          </Text>
          <Divider
            css={{
              flex: "8",
            }}
          />
        </Row>
        <SmallPostComponent
          id="solana-turbine-block-propagation"
          title="Turbine Block Propagation"
          description="Why turbine is underrated"
          date="DEC 1, 2022"
          duration="15 min read"
        />
      </Container>
    </Col>
  );
};

export default Blog;
