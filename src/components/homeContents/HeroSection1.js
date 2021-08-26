import React from "react";
import styled from "styled-components";
import Oval from "assets/icons/Oval.svg";
import FirstSection from "./sections/FirstSection";
import { Link } from "react-router-dom";
const HeroSection1 = ({ data }) => {
  return (
    <Wrapper>
      <Intro>
        <Img src={Oval} />

        {data && data.length > 0 && (
          <Link to={`/channel/${data[0].snippet.channelId}`}>
            <Name>Most Popular Videos</Name>
          </Link>
        )}
      </Intro>
      <FirstSection data={data} />
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
export default HeroSection1;
