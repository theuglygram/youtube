import React, { useState } from "react";
import styled from "styled-components";
import searchIocon from "assets/icons/search.svg";
import phoneIcon from "assets/icons/phoneIcon.svg";
import shapeIcon from "assets/icons/shapeIcon.svg";
import notificationIcon from "assets/icons/notificationIcon.svg";
import Userpic from "assets/icons/Userpic.svg";
import youtube from "assets/logos/youtube.svg";
import { AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    setSearch(!search);
  };
  const back = () => {
    setSearch(!search);
  };
  return (
    <Wrapper>
      <NavWrapper>
        <LeftSection>
          <Link to="/">
            <Logo src={youtube} />
          </Link>
          <SearchBar>
            <SearchIcon src={searchIocon} />
            <SearchInput></SearchInput>
          </SearchBar>
        </LeftSection>
        <RightSection>
          <Icons src={phoneIcon} />
          <Icons src={shapeIcon} />
          <Icons src={notificationIcon} />
          <Icons src={Userpic} />
        </RightSection>
      </NavWrapper>
      <MobileMenu>
        <Contents>
          <Logo2 src={youtube} />
          <Piece>
            <Icon src={searchIocon} onClick={toggleSearch} />
            <Icons2 src={Userpic} />
          </Piece>
        </Contents>
      </MobileMenu>
      <SearchDiv toggle={search}>
        <SearchContent>
          <ArrowRightIcon onClick={back} />
          <MobileSearch />
          <Search />
        </SearchContent>
      </SearchDiv>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const NavWrapper = styled.nav`
  max-width: 1300px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  margin-right: 50px;
  margin-left: -100px;
  @media only screen and (max-width: 1024px) {
    margin-left: unset;
  }
`;
const Logo2 = styled.img`
  margin-right: 20px;
`;
const SearchBar = styled.div`
  position: relative;
  height: 34px;
  width: 530px;
  z-index: 1;

  margin-right: 50px;
`;
const SearchIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 17px;
  cursor: pointer;
  z-index: 2;
`;
const SearchInput = styled.input`
  height: 34px;
  max-width: 530px;
  background: #ebebeb;
  width: 100%;
  margin-right: 50px;
  opacity: 0.3;
  padding: 0 48px 0 16px;
  border-radius: 22px;
  outline: none;
  box-shadow: none;
  border: none;
`;
const RightSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 260px;
  height: 34px;
  cursor: pointer;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 700px) {
    display: block;
  }
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin: 20px 0;
  justify-content: space-between;
`;
const Piece = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.img`
  height: 24px;
  width: 24px;
`;
const Icons2 = styled.img`
  width: 30px;
  height: 30px;
`;
const Icon = styled.img`
  margin-right: 24px;
`;

const SearchDiv = styled.div`
  background: #fff;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 3;
  left: 0;
  width: 100%;
  padding: 0 20px;
  display: ${(props) => (props.toggle ? "block" : "none")};
`;
const SearchContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 30px 20px;
  height: 40px;
`;
const ArrowRightIcon = styled(AiOutlineArrowLeft)`
  color: #808080;
  height: 30px;
  width: 30px;
`;
const Search = styled(AiOutlineSearch)`
  color: #808080;
  height: 30px;
  width: 30px;
`;
const MobileSearch = styled.input`
  border: none;
  border-bottom: 1px solid #1934c8f2;
  background: transparent;
  outline: none;
  width: 100%;
  padding-top: 10px;
  height: 50px;
`;
export default TopNav;
