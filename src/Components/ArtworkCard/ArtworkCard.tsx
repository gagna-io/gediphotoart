import PropTypes from 'prop-types';
import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Picture from '../Picture/Picture';
import ArrowIcon from '../Icons/ArrowIcon/ArrowIcon';
import CartContext from '../../Contexts/CartContext';

const StyledArrowIcon = styled(ArrowIcon)`
    @media only screen and (min-device-width: 1025px) {
      transform: translateX(-10px);
      transition: .1s;
      &:hover {
        transform: translateX(0);
      }
    }
`;

const StyledCard = styled(Link)`
    display: flex;
    flex-direction: column;
    padding: 1em;
    background-color: white;
    &:hover {
      z-index: 1;
      cursor: pointer;
      text-decoration: none;
      border: none;
    }
    @media only screen and (min-device-width: 1025px) {
      transition: .1s;
      &:hover {
        transform: scale(1.05);
        ${StyledArrowIcon} {
          transform: translateX(0);
        }
      }
    }
`;

const StyledFooter = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ArtworkCard: FC<{ image: string, title: string}> = ({ image, title }) => {
  const { setCart } = useContext(CartContext);
  return (
    <StyledCard onClick={() => setCart({image, title, inCart: ''})} to={`/artwork/${image}`}>
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
  title: PropTypes.string.isRequired,
}

export default ArtworkCard;
