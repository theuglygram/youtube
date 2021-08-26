import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const FirstSection = ({ data }) => {
  // const sectionItems = [
  //   {
  //     img: history,
  //     historyTitle: "A Brief History Of Creation",
  //     view: "80k views",
  //     day: "3 days",
  //     name: "Dollie Blair",
  //     time: "4:15 pm",
  //   },
  //   {
  //     img: hotel,
  //     historyTitle: "Selecting The Right Hotel",
  //     view: "123k views",
  //     day: "1 months ago",
  //     name: "Dollie Blair",
  //     time: "8:15 pm",
  //   },
  //   {
  //     img: asteroids,
  //     historyTitle: "Asteroids",
  //     view: "13k views",
  //     day: "3 months ago",
  //     name: "Dollie Blair",
  //     time: "9:15 pm",
  //   },
  //   {
  //     img: telescope,
  //     historyTitle: "Telescope 101",
  //     view: "20k views",
  //     day: "5 months ago",
  //     name: "Dollie Blair",
  //     time: "2:25 pm",
  //   },
  // ];
  return (
    <>
      {data && data.length > 0 && (
        <Wrapper>
          {data.map((item, index) => (
            <Link to={`/channel/${item.snippet.channelId}`}>
              <ContentWrapper key={index}>
                <Sm>
                  {" "}
                  <Img src={item.snippet.thumbnails.default.url} />
                  <Description>
                    <History>{item.snippet.title}</History>
                    <Stats>
                      <Day>
                        {" "}
                        {new Date(
                          `${item.snippet.publishedAt}`
                        ).toLocaleDateString()}
                      </Day>
                      <Name>{item.snippet.channelTitle} </Name>

                      {/* <Time>{item.contentDetails.contentRating.definition}</Time> */}
                    </Stats>
                  </Description>
                </Sm>
                <Views>{Number(`${item.statistics.viewCount}`)} Views</Views>
              </ContentWrapper>
            </Link>
          ))}
        </Wrapper>
      )}
    </>
  );
};
const Wrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 20px;
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
`;
const Sm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Img = styled.img`
  max-width: 250px;
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
  margin: 5px 0;
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
  left: 177px;
  top: -50px;
  background: #c2c2c2;
  mix-blend-mode: normal;
  color: #fff;
  border-radius: 12px;
  padding: 5px 10px;
  font-size: 12px;
  @media only screen and (max-width: 320px) {
    left: 130px;
  }
`;
export default FirstSection;
