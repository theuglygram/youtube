import FixedBottom from "components/homeContents/sections/FixedBottom";
import TopNav from "components/navigation/TopNav";
import BodySection from "components/videoContents/BodySection";
import SideBar from "components/videoContents/SideBar";
import React, { useEffect } from "react";
import styled from "styled-components";

const VideoPlayer = () => {
  useEffect(() => {
    document.title = "Youtube | Video";
  });
  return (
    <Wrapper>
      <HomeWrapper>
        <TopNav />
        <Holder>
          <BodySection />
          <SideBar />
        </Holder>
      </HomeWrapper>
      <Fix>
        <FixedBottom />
      </Fix>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HomeWrapper = styled.div``;
const Holder = styled.div`
  display: grid;
  grid-template-columns: auto 300px;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;
const SectionHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
const Fix = styled.div`
  position: fixed;
  bottom: 0;

  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
export default VideoPlayer;
