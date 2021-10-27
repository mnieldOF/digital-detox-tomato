import * as React from "react";
import { graphql } from "gatsby";
import GlobalStyle from "../styles/global";
import { Link } from "gatsby";
import Header from "../components/Header";
import TomatoDetail from "../components/TomatoDetail";
import Tabs from "../components/Tabs";
import Varieties from "../components/Varieties";
import CTABlock from "../components/CTABlock";
import { getTomatoData } from "../api";
import { Flex, Container } from "../styles/atoms";

export default function Home({ data }) {
  const { tabs, varietiesBlock, contactBlock } = data.datoCmsHome;
  const [tomatoData, setTomatoData] = React.useState(null);

  React.useEffect(() => {
    getTomatoData().then((data) => {
      setTomatoData(data.foods[0]);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>
        <Container>
          <Flex>
            <Varieties data={varietiesBlock} />
            <TomatoDetail tomato={tomatoData} />
          </Flex>
        </Container>
      </div>
      <Tabs data={tabs} />
      <CTABlock data={contactBlock} />
    </>
  );
}

export const query = graphql`
  {
    datoCmsHome {
      tabs {
        tabBlock {
          tabContent {
            value
          }
          tabTitle
        }
      }
      contactBlock {
        subTitle
        title
        submitButton
      }
      varietiesBlock {
        title
        varietiesContent {
          value
        }
      }
    }
  }
`;
