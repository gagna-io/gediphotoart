import { Link } from "react-router-dom";
import styled from 'styled-components'
import WhiteLogo from './Logo-white.svg';

const StyledLogo = styled.img`
  width: 80px;
`;

const MainLogo = ({ theme }) => {
  return (
    <>
      <Link to='/'>
        {theme === 'white' && <StyledLogo src={WhiteLogo} />}
      </Link>
    </>
  );
}

export default MainLogo;
