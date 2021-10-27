import React from "react";
import { StructuredText } from "react-datocms";
import styled from "@emotion/styled";
import { Container, StyledButton } from "../styles/atoms";

const StyledSection = styled.section`
  padding: 30px 0;
`;

const TabContentStyled = styled.div`
  border-top: 3px solid #451e1e;
  &.hide {
    display: none;
  }
`;

export default function Tabs({ data }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const TabTitles = () =>
    data[0].tabBlock.map((tab, index) => (
      <StyledButton
        onClick={() => {
          setActiveTab(index);
        }}
        key={`tt_${index}`}
      >
        {tab.tabTitle}
      </StyledButton>
    ));

  const TabContent = () =>
    data[0].tabBlock.map((tab, index) => {
      return (
        <TabContentStyled
          className={activeTab === index ? "show" : "hide"}
          key={`tc_${index}`}
        >
          <StructuredText data={tab.tabContent} />
        </TabContentStyled>
      );
    });

  return (
    <StyledSection>
      <Container>
        <TabTitles />
      </Container>
      <Container>
        <TabContent />
      </Container>
    </StyledSection>
  );
}
