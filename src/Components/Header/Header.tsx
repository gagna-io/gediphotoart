import { Link } from "react-router-dom";
import styled from 'styled-components';
import MainLogo from "../Icons/MainLogo/MainLogo";
import Wrapper from "../Layout/Wrapper";

const StyledHeader = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    z-index: 10;
    padding: 1em 0em;
    margin: 0 auto;
`;

const StyledMenuItems = styled.div`
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
  return (
    <Wrapper>
      <StyledHeader>
        <MainLogo theme='white' />
        <StyledMenuItems>
          <StyledMenuItem to='/'>Start page</StyledMenuItem>
          <StyledMenuItem to='/artworks'>Artwork</StyledMenuItem>
        </StyledMenuItems>
      </StyledHeader>
    </Wrapper>  );
}

export default Header;
