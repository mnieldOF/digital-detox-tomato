import React from "react";
import Logo from "../assets/tomato.svg";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  alignitems: center;
  background: #ffcc80;
  padding: 10px 0;
  img {
    width: 75px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={Logo} alt="tomato logo" />
    </StyledHeader>
  );
}
