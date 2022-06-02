import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Picture from '../Picture/Picture';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';

const StyledArrowIcon = styled(ArrowIcon)`
    transform: translateX(-10px);
    transition: .1s;
    &:hover {
        transform: translateX(0);
    }
`;

const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 1em;
    background-color: white;
    transition: .1s;
    &:hover {
      transform: scale(1.05);
      z-index: 1;
      cursor: pointer;
      text-decoration: none;
      border: none;
      ${StyledArrowIcon} {
        transform: translateX(0);
      }
    }
`;

const StyledFooter = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ArtworkCard: FC<{ image: string, title?: string}> = ({ image, title }) => {
  return (
    <StyledCard to={`/artwork/${image}`}>
      <Picture image={`${image}-thumb.jpg`} title={title} />
      <StyledFooter>
        {title}
        <StyledArrowIcon />
      </StyledFooter>
    </StyledCard>
  );
}

ArtworkCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default ArtworkCard;
