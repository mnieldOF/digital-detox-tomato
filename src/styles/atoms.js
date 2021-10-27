import styled from "@emotion/styled";

const Container = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "1200px")};
  margin: 0 auto;
  padding: 0px 15px;
`;

const Flex = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  flex: 1;
  margin-right: 10px;
  border: 0px;
  padding: 10px 20px;
  background: #ffcc80;
  transition: opacity 0.3s ease-in-out;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { Container, Flex, StyledButton };
