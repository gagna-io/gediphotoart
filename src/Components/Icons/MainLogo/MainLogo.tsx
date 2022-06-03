import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import WhiteLogo from './Logo-white.svg';

const StyledLogo = styled.img`
  width: 80px;
`;

const StyledLink = styled(Link)`
  &:hover {
    border-bottom: none;
  }
`;

const MainLogo: React.FC<{ theme?: string }> = ({ theme }) => {
  return (
    <>
      <StyledLink to='/'>
        {!theme || theme === 'white' && <StyledLogo src={WhiteLogo} />}
      </StyledLink>
    </>
  );
}

MainLogo.propTypes = {
  theme: PropTypes.string
};

export default MainLogo;
