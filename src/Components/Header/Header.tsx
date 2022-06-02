import { Link } from "react-router-dom";
import styled from 'styled-components';
import MainLogo from "../Icons/MainLogo/MainLogo";
import Wrapper from "../Layout/Wrapper";

const StyledHeader = styled.header`
    width: 100%;
    z-index: 10;
    position: fixed;
`;

const StyledWrapper = styled(Wrapper)`
    padding: 1.5em 1em;
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
  return (
    <StyledHeader>
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
