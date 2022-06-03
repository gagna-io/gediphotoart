import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import MainLogo from "../Icons/MainLogo/MainLogo";
import Wrapper from "../Layout/Wrapper";

interface StyledHeaderProps {
  showBackground: boolean;
}

const StyledHeader = styled.header<StyledHeaderProps>`
    width: 100%;
    z-index: 10;
    position: fixed;
    transition: .2s;
    background: ${p => p.showBackground ? 'rgba(0, 0, 0, .8)' : 'none'};
`;

const StyledWrapper = styled(Wrapper)`
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StyledMenuItem = styled(Link)`
  color: #fafafa;
  font-weight: bold;
  font-size: 1.2em;
  margin: 0 1em;
  &:last-child {
    margin-right: 0;
  }
`

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  },[]);

  const onScroll = () => {
    setIsScrolling(!isScrolling && window.scrollY > 0);
  };

  return (
    <StyledHeader showBackground={isScrolling}>
      <StyledWrapper>
        <MainLogo theme='white' />
        <div>
          <StyledMenuItem to='/'>Start page</StyledMenuItem>
          <StyledMenuItem to='/artworks'>Artwork</StyledMenuItem>
        </div>
      </StyledWrapper>
    </StyledHeader>

  );
}

export default Header;
