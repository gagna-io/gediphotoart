import Wrapper from "../../Components/Layout/Wrapper";
import SlimHero from "../../Components/SlimHero/SlimHero";
import PropTypes from 'prop-types';
import { FC, useContext, useEffect, useState } from "react";
import Picture from "../../Components/Picture/Picture";
import CartContext from "../../Contexts/CartContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import ArtworkSelector from "../../Components/ArtworkSelector/ArtworkSelector";
import BackendContext from '../../Contexts/BackendContext';

interface ArtworkDetailPageProps {
    title: string,
    image: string,
}

interface HorisontalProps {
    isHorisontal: boolean,
}

const StyledContainer = styled.div<HorisontalProps>`
  display: block;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1079px) {
    display: flex;
    flex-direction: ${p => p.isHorisontal ? 'column' : 'row-reverse'};
  }
  @media only screen and (min-device-width: 1080px) {
    display: flex;
    flex-direction: ${p => p.isHorisontal ? 'column' : 'row-reverse'};
  }
`;

const StyledArtworkSelector = styled(ArtworkSelector)<HorisontalProps>`
  bottom: 0;
  left: 0;
  z-index: 2;
  min-height: 10vh;
  width: 100%;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1079px) {
    width: ${p => p.isHorisontal ? '100%' : '70%'};
    position: static;
  }
  @media only screen and (min-device-width: 1080px) {
    width: ${p => p.isHorisontal ? '100%' : '50%'};
    position: static;
  }
`;

const ArtworkDetailsPage: FC<ArtworkDetailPageProps> = () => {
  let { cart } = useContext(CartContext);
  const { artworks } = useContext(BackendContext);
  const location = useLocation();
  const [isHorisontal, setIsHorisontal] = useState(false);
  
  if (cart.image === '') {
    const selectedImage = location.pathname.split('/').slice(-1)[0];
    const artwork = artworks.find(art => art.image === selectedImage);
    cart = Object.assign({}, cart, {...artwork});
  }

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      if ((img.width / img.height) > 1.1) {
        setIsHorisontal(true);
      }
    };
    img.src = `/images/${cart.image}.jpg`;
  }, [cart]);
  
  return (
    <>
      <SlimHero title={cart.title} ingress={<h5>Customize your art</h5>}></SlimHero>
      <Wrapper>
        <StyledContainer isHorisontal={isHorisontal}>
          <StyledArtworkSelector isHorisontal={isHorisontal} />
          <Picture image={`${cart.image}.jpg`} title={cart.title} />
        </StyledContainer>
      </Wrapper>
    </>
  );
}

ArtworkDetailsPage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default ArtworkDetailsPage;
