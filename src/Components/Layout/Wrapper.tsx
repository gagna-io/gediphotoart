import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1em;
`;

const Wrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <StyledWrapper className={className}>
      {children}
    </StyledWrapper>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Wrapper;
