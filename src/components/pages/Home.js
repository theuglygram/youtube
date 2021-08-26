import axios from "axios";
import HeroSection1 from "components/homeContents/HeroSection1";
import HeroSection2 from "components/homeContents/HeroSection2";
import HeroSection3 from "components/homeContents/HeroSection3";
import FixedBottom from "components/homeContents/sections/FixedBottom";
import SideNav from "components/navigation/SideNav";
import TopNav from "components/navigation/TopNav";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchVideos = () => {
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyA9JH6lmbwJYeNkWJMxzl4m3IoLEUgVOTo"
      )
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items);
      });
  };

  useEffect(() => {
    document.title = "Youtube | Home";
    fetchVideos();
  }, []);
  return (
    <Wrapper>
      <HomeWrapper>
        <TopNav />
        <Holder>
          <SideNav />
          <SectionHolder>
            {data && <HeroSection1 data={data} />}
            <HeroSection2 />
            <HeroSection3 />
          </SectionHolder>
        </Holder>
      </HomeWrapper>
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
export default Home;
