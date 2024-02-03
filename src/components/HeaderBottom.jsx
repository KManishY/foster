import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import styled from "styled-components";

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconStyle = {
  fontSize: "65px",
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  gap: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #eeebeb;
  border-radius: 10px;
  width: 40%;
`;

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #bab4b4;
  width: 40%;
`;

const CardContent = styled.div`
  font-weight: 700;
  font-size: 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  padding: 20px;
  /* background-color: #eeebeb; */
  width: 40%;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const HeaderBottom = () => {
  return (
    <Container>
      <CardContainer>
        <CardTitle>Karan</CardTitle>
        <CardContent>Let's explore this evening</CardContent>
      </CardContainer>

      <BottomContainer>
        <IconWrapper>
          <IconContainer>
            <BiSolidOffer style={{ ...IconStyle, color: "#f22755" }} />
          </IconContainer>
          <div style={{ fontWeight: 700, fontSize: "12px", color: "#bab4b4" }}>
            Offers
          </div>
        </IconWrapper>

        <IconWrapper>
          <IconContainer>
            <CiWallet style={{ ...IconStyle, color: "#6969eb" }} />
          </IconContainer>
          <div style={{ fontWeight: 700, fontSize: "12px", color: "#bab4b4" }}>
            Wallet
          </div>
        </IconWrapper>
      </BottomContainer>
    </Container>
  );
};

export default HeaderBottom;
