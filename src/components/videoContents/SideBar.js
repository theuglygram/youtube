import React from "react";
import styled from "styled-components";

import cream from "assets/images/cream.png";
import berries from "assets/images/berries.png";
import dough from "assets/images/dough.png";
import waffle from "assets/images/waffle.png";

const SideBar = () => {
  const sectionItems = [
    {
      img: cream,
      historyTitle: "Baby Monitor Technology",
      view: "80k views",
      day: "3 days",
      name: "Dollie Blair",
      time: "4:15 pm",
    },
    {
      img: berries,
      historyTitle: "A Good Autoresponder",
      view: "123k views",
      day: "1 months ago",
      name: "Dollie Blair",
      time: "8:15 pm",
    },
    {
      img: dough,
      historyTitle: "Radio Astronomy",
      view: "13k views",
      day: "3 months ago",
      name: "Dollie Blair",
      time: "9:15 pm",
    },
    {
      img: waffle,
      historyTitle: "Space Invaders",
      view: "20k views",
      day: "5 months ago",
      name: "Dollie Blair",
      time: "2:25 pm",
    },
  ];
  return (
    <Wrapper>
      <SideWrapper>
        <TopTxt>
          <Next>Next</Next>
          <Autoplay>Autoplay</Autoplay>
        </TopTxt>

        {sectionItems.map((item, index) => (
          <ContentWrapper key={index}>
            <Img src={item.img} />
            <Description>
              <History>{item.historyTitle}</History>
              <Stats>
                <Views>{item.view}</Views>
                <Day> {item.day}</Day>
                <Name>{item.name} </Name>
                <Time>{item.time}</Time>
              </Stats>
            </Description>
          </ContentWrapper>
        ))}
      </SideWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  padding: 0 20px;
  gap: 30px;
  place-items: center;
  padding-bottom: 50px;
`;
const ContentWrapper = styled.div`
  margin: 30px 0;
  max-width: 650px;
  width: 100%;
`;
const Img = styled.img`
  max-width: 650px;
  width: 100%;
`;
const Description = styled.div`
  position: relative;
`;
const History = styled.h4`
  margin: 10px 0;
`;
const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  width: 100%;
`;
const Views = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #c2c2c2;
`;
const Day = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #c2c2c2;
`;
const Name = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #c2c2c2;
`;
const Time = styled.div`
  position: absolute;
  right: 10px;
  top: -50px;
  background: #c2c2c2;
  mix-blend-mode: normal;
  color: #fff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
`;
const SideWrapper = styled.div`
  padding: 0 20px;
`;
const TopTxt = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Next = styled.h4`
  cursor: pointer;
  :hover {
    color: red;
  }
`;
const Autoplay = styled.p`
  cursor: pointer;
  :hover {
    color: red;
  }
`;
export default SideBar;
