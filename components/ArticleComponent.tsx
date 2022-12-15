import { Col, Row, Spinner, Text, Image } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface ArticleComponentProps {
  id: string;
}
interface ArticleData {
  id: string;
  title: string;
  description: string;
  body: string;
  date: string;
  duration: string;
  image: string;
}
const ArticleComponent = (article: ArticleComponentProps) => {
  const router = useRouter();
  const [articleData, setArticleData] = React.useState<ArticleData | null>({
    id: "solana-diet-client",
    title: "Solana Diet Client",
    description: "you only need one",
    date: "DEC 1, 2021",
    duration: "1 min read",
    image: "https://i.imgur.com/hHw644t.png",
    body: `They’re a different version of light clients that make some very interesting tradeoffs. With light clients, you have an honest full node raising a fraud proof. Fraud proofs require state commitments periodically (every block would be ideal, but this can impact performance. So lets say once every fixed number of blocks). Diet clients avoid fraud proofs by letting the full node just say **“I'm going to burn 10000 SOL if this block is accepted. I know it’s fraudulent”** - this essentially serves as an SOS message to the light clients. If they accept the block, then they’re accepting a transaction where a full node is basically just burning their own currency.

    So that serves as an SOS signal, but what do the light nodes do now? This is where the tradeoff comes in - they can coordinate via social consensus, or launch a full node temporarily to sync the state and verify the fraudulent transaction just as a full node would. This sounds hard, but there are some solutions here - cloud computing lets you launch a machine powerful enough to be a solana validator at 2-3$ an hour. Solana also takes incremental snapshots every minute or so. Syncing the full snapshot, the most recently incremental snapshot (hashes of which are in the chain and can be verified). This can all be done within an hour and the machine can be shut down. Naturally, this is tradeoff, but can be done with 0 additional cost (since state commitments are needed)`,
  });
  useEffect(() => {
    const getArticle = async () => {
      const res = await axios.get(`/api/article/${article.id}`);
      setArticleData(res.data);
    };
    // getArticle();
  }, [article.id]);
  return articleData ? (
    <Col
      //   onClick={() => router.push("/blog/" + post.id)}
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
        <Row
          css={{
            alignItems: "center",
          }}
        >
          <Text color="$yellow500">{"By Anoushk Kharangate —"}</Text>
          <Text
            color="$gray600"
            css={{
              fontSize: "1.2rem",
            }}
          >
            {" " + articleData.date}
          </Text>
        </Row>
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
          {articleData.title}
        </Text>
        <Text
          color="$gray300"
          css={{
            fontSize: "1.8rem",
            // marginLeft: "0.2rem",
          }}
        >
          {articleData.description}
        </Text>
        <Text
          color="$gray600"
          css={{
            fontSize: "1.2rem",
          }}
        >
          {articleData.duration}
        </Text>
        <Row justify="flex-start">
          <Image
            src={articleData.image}
            //   width="100%"
            // height={500}
            alt="Article Image"
            style={{
              transform: "translateX(-10rem)",
              // marginTop: "2rem",
              // marginBottom: "2rem",
            }}
          />
        </Row>
        <Text
          //   color="$gray600"
          css={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            marginTop: "2rem",
            maxWidth: "80%",
          }}
        >
          {articleData.body}
        </Text>
      </Col>
    </Col>
  ) : (
    <div>loading...</div>
  );
};

export default ArticleComponent;
