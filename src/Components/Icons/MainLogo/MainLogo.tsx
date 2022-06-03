import PropTypes from 'prop-types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import WhiteLogo from './Logo-white.svg';

const StyledLogo = styled.img`
  width: 100%;
  height: auto;
`;

const StyledLink = styled(Link)`
  &:hover {
    border-bottom: none;
  }
`;

const MainLogo: FC<{ theme?: string, className?: string }> = ({ theme, className }) => {
  return (
    <div className={className}>
      <StyledLink to='/'>
        {!theme || theme === 'white' && <StyledLogo src={WhiteLogo} />}
      </StyledLink>
    </div>
  );
}

MainLogo.propTypes = {
  theme: PropTypes.string,
  className: PropTypes.string
};

export default MainLogo;
