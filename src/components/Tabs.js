import React from "react";
import { StructuredText } from "react-datocms";
import styled from "@emotion/styled";

const TabContentStyled = styled.div`
  &.hide {
    display: none;
  }
`;

export default function Tabs({ data }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const TabTitles = () =>
    data[0].tabBlock.map((tab, index) => (
      <button
        onClick={() => {
          setActiveTab(index);
        }}
        key={`tt_${index}`}
      >
        {tab.tabTitle}
      </button>
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
    <div>
      <TabTitles />
      <TabContent />
    </div>
  );
}
