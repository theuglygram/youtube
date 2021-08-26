import React from "react";
import styled from "styled-components";
import Oval from "assets/icons/Oval.svg";

export const Subscriptions = () => {
  const subItems = [
    {
      title: "Ann Reeves",
      icon: Oval,
    },
    {
      title: "Andy Carl",
      icon: Oval,
    },
    {
      title: "Andy Carl",
      icon: Oval,
    },
    {
      title: "Andy Carl",
      icon: Oval,
    },
    {
      title: "Andy Carl",
      icon: Oval,
    },
  ];
  return (
    <Wrapper>
      {subItems.map((item, index) => (
        <Links key={index}>
          <img src={item.icon} />
          {item.title}
        </Links>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
  img {
    margin-right: 15px;
  }
  :hover {
    color: red;
  }
`;

export default Subscriptions;
