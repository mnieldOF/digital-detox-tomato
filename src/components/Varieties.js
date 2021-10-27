import React from "react";
import { StructuredText } from "react-datocms";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  flex: 1;
`;

export default function Varieties({ data }) {
  const { title, varietiesContent } = data[0];
  return (
    <StyledDiv>
      <h2>{title}</h2>
      <div>
        <StructuredText data={varietiesContent} />
      </div>
    </StyledDiv>
  );
}
