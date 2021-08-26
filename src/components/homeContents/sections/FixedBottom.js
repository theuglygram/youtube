import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineFire, AiOutlineFolder } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { Link } from "react-router-dom";
const FixedBottom = () => {
  return (
    <Wrapper>
      <FixWrapper>
        <Link to="/">
          <Wrap>
            <Home /> Home
          </Wrap>
        </Link>
        <Link to="videoplayer">
          {" "}
          <Wrap>
            <Fire /> Trending
          </Wrap>
        </Link>
        <Link to="/">
          <Wrap>
            <Folder />
            Library
          </Wrap>
        </Link>
        <Link to="/">
          {" "}
          <Wrap>
            <Subscriptions />
            Subscriptions
          </Wrap>
        </Link>
      </FixWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 75px;
  padding: 20px 0;
`;
const FixWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  background: #fff;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  height: 61px;
  background: #fff;
  left: 0px;
  top: 963px;
  border-radius: 0px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  :hover {
    color: #ff0000;
  }
`;
const Home = styled(AiOutlineHome)`
  width: 20px;
  height: 20px;
  :hover {
    color: #ff0000;
  }
`;
const Fire = styled(AiOutlineFire)`
  width: 20px;
  height: 20px;
  :hover {
    color: #ff0000;
  }
`;
const Folder = styled(AiOutlineFolder)`
  width: 20px;
  height: 20px;
  :hover {
    color: #ff0000;
  }
`;
const Subscriptions = styled(MdSubscriptions)`
  width: 20px;
  height: 20px;
  :hover {
    color: #ff0000;
  }
`;
export default FixedBottom;
