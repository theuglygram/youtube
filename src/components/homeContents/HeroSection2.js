import React from "react";
import styled from "styled-components";
import SecondSection from "./sections/SecondSection";
const HeroSection2 = () => {
  return (
    <Wrapper>
      <Intro>
        <Name>Recommended</Name>
      </Intro>
      <SecondSection />
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

export default HeroSection2;
