import React from "react";
import styled from "styled-components";
import Oval2 from "assets/icons/Oval2.svg";
import ThirdSection from "./sections/ThirdSection";
const HeroSection3 = () => {
  return (
    <Wrapper>
      <Intro>
        <Img src={Oval2} />
        <Name>Food & Drink</Name>
      </Intro>
      <ThirdSection />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 60px 0 0;
  padding: 0 20px;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;
`;
const Name = styled.h4``;
const Img = styled.img`
  margin-right: 15px;
`;
export default HeroSection3;
