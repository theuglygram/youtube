import React from "react";
import styled from "styled-components";
import dude from "assets/images/dude.png";
import gazing from "assets/images/gazing.png";
import lady from "assets/images/lady.png";

const SecondSection = () => {
  const sectionItems = [
    {
      img: dude,
      historyTitle: "Dude You Re Getting A Telescope",
      view: "80k views",
      day: "3 days",
      name: "Dollie Blair",
      time: "4:15 pm",
    },
    {
      img: gazing,
      historyTitle: "Moon Gazing",
      view: "123k views",
      day: "1 months ago",
      name: "Dollie Blair",
      time: "8:15 pm",
    },
    {
      img: lady,
      historyTitle: "Moon Gazing",
      view: "13k views",
      day: "3 months ago",
      name: "Dollie Blair",
      time: "9:15 pm",
    },
  ];
  return (
    <Wrapper>
      {sectionItems.map((item, index) => (
        <ContentWrapper key={index}>
          <Img src={item.img} />
          <Description>
            <History>{item.historyTitle}</History>
            <Stats>
              <Views>{item.view}</Views>
              <Day> {item.day}</Day>
              <Name>{item.name}</Name>
              <Time>{item.time}</Time>
            </Stats>
          </Description>
        </ContentWrapper>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 20px;
  place-items: center;
  gap: 30px;
  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
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
  max-width: 380px;
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
export default SecondSection;
