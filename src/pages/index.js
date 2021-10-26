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

export default function Home({ data }) {
  console.log(data);
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
      <TomatoDetail tomato={tomatoData} />
      <Varieties data={varietiesBlock} />
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
