import PropTypes from 'prop-types';
import { FC } from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const StyledIcon = styled.img`
    width: 1.6em;
`;

const Wrapper: FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledIcon className={className} src={arrow} />
  );
}

Wrapper.propTypes = {
  className: PropTypes.string,
}

export default Wrapper;
