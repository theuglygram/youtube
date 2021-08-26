import axios from "axios";
import HeroSection1 from "components/channelContents/HeroSection1";
import HeroSection2 from "components/channelContents/HeroSection2";
import SingleSection from "components/channelContents/sections/SingleSection";
import FixedBottom from "components/homeContents/sections/FixedBottom";
import SideNav from "components/navigation/SideNav";
import TopNav from "components/navigation/TopNav";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Channel = () => {
  const { slug } = useParams();
  const [channelData, setChannelData] = useState(null);

  const fetchChannel = () => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${slug}&key=AIzaSyA9JH6lmbwJYeNkWJMxzl4m3IoLEUgVOTo`
      )
      .then((res) => {
        setChannelData(res.data.items);
        console.log(res.data.items);
      });
  };
  useEffect(() => {
    document.title = "Youtube | Channel";

    console.log(slug);
    fetchChannel();
  }, []);
  return (
    <Wrapper>
      {channelData && (
        <>
          <HomeWrapper>
            <TopNav />
            <Holder>
              <SideNav />
              <SectionHolder>
                <HeroSection1 data={channelData} />
                <HeroSection2 />
                <SingleSection />
              </SectionHolder>
            </Holder>
          </HomeWrapper>
        </>
      )}
      <Fix>
        {" "}
        <FixedBottom />
      </Fix>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HomeWrapper = styled.div``;
const Holder = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
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
export default Channel;
