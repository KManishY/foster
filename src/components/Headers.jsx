import React from "react";
import styled from "styled-components";
import { FaRegUser } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  height: auto;
  margin-top: 20px;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PreOrder = styled.div`
  display: flex;
  margin-right: 40px;
  color: #838ba1;
  font-size: 16px;
  font-weight: 700;
`;

const ConnaughtPlace = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftColumn>
        <PreOrder>
          Pre Order From
          <FaRegUser />
        </PreOrder>
        <ConnaughtPlace>New Delhi</ConnaughtPlace>
      </LeftColumn>
    </HeaderContainer>
  );
};
