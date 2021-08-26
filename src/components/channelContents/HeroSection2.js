import React from "react";
import styled from "styled-components";
import audio from "assets/images/audio.png";
import Oval from "assets/icons/Oval.svg";
const HeroSection2 = () => {
  return (
    <Wrapper>
      <HeroWrap>
        {/* -----------------NAVIAGTION FOR DESKTOP START--------------- */}
        <TopSection>
          <LinkHolder>
            <Links>Home</Links>
            <Links>Videos</Links>
            <Links>Playlist</Links>
            <Links>Channels</Links>
            <Links>Discussion</Links>
            <Links>About</Links>
            <Search>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z"
                  fill="black"
                />
              </svg>
            </Search>
          </LinkHolder>
        </TopSection>
        {/* -----------------NAVIAGTION FOR DESKTOP END--------------- */}

        {/*--------------------BOTTOM SECTION START_________________ */}
        <BottomSection>
          <RightSection>
            <ImageWrapper>
              <Image src={audio} />
              <Time>7:36pm</Time>
            </ImageWrapper>
            <TextWrapper>
              <TopText>
                Choosing The Best Audio Player Software For Your Computer
              </TopText>
              <BottomText>
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads.{" "}
              </BottomText>
            </TextWrapper>
          </RightSection>
          <LeftSection>
            <Recommend>Recommended Channel</Recommend>
            <People>
              <Picture src={Oval} />
              <Name>Flora Benson</Name>
            </People>
            <People>
              <Picture src={Oval} />
              <Name>Ann Benson</Name>
            </People>
            <People>
              <Picture src={Oval} />
              <Name>Lucy Reeves</Name>
            </People>
            <People>
              <Picture src={Oval} />
              <Name>Anita Davis</Name>
            </People>
          </LeftSection>
        </BottomSection>
        {/*--------------------BOTTOM SECTION END_________________ */}
      </HeroWrap>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const HeroWrap = styled.div``;

const TopSection = styled.nav`
  max-width: 700px;
  padding: 0 20px;
`;
const LinkHolder = styled.ul`
  display: flex;
  align-items: center;
  max-width: 700px;
  width: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Links = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  line-height: 23px;

  :hover {
    color: red;
  }
`;
const Search = styled.div``;

const BottomSection = styled.div`
  margin: 55px 0;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 900px auto;
  grid-gap: 30px;
  max-width: 1200px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const RightSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  height: 250px;
  width: 100%;
  position: relative;
`;
const Image = styled.img`
  height: 250px;
  max-width: 740px;
  width: 100%;
`;
const Time = styled.div`
  position: absolute;
  right: 5%;
  bottom: 10%;
  background: #000000;
  mix-blend-mode: normal;
  border-radius: 12px;
  width: 70px;
  color: #fff;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextWrapper = styled.div``;
const TopText = styled.p`
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  letter-spacing: 0px;
`;
const BottomText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  margin: 20px 0;
`;
const LeftSection = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Recommend = styled.h4`
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 40px;
  color: #c2c2c2;
`;
const People = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 30px;
`;
const Picture = styled.img`
  margin-right: 20px;
`;
const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  color: #19202c;
`;
export default HeroSection2;
