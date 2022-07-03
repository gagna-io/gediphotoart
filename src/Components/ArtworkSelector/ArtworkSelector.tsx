import { FC } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton/RadioButton';

const StyledContainer = styled.div`
  background-color: white;
  color: black;
`;

const ArtworkSelector: FC<{ className?: string }> = ({ className }) => {
  return (
    <StyledContainer className={className}>
      <RadioButton label="Digital print" />
    </StyledContainer>
  );
}

ArtworkSelector.propTypes = {
  className: PropTypes.string,
}

export default ArtworkSelector;
