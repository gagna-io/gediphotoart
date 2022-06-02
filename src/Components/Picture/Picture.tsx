import PropTypes from 'prop-types';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPicture = styled.figure`
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Picture: FC<{ image: string, title?: string}> = ({ image, title }) => {
  return (
    <StyledPicture>
      <StyledImage src={`${process.env.PUBLIC_URL}/images/${image}`} alt={title} />
    </StyledPicture>
  );
}

Picture.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default Picture;
