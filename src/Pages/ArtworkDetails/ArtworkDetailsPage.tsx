import Wrapper from "../../Components/Layout/Wrapper";
import SlimHero from "../../Components/SlimHero/SlimHero";
import PropTypes from 'prop-types';
import { FC, useContext } from "react";
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

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const ArtworkDetailsPage: FC<ArtworkDetailPageProps> = () => {
  let { cart } = useContext(CartContext);
  
  if (cart.image === '') {
    const location = useLocation();
    const selectedImage = location.pathname.split('/').slice(-1)[0];
    const { artworks } = useContext(BackendContext);
    const artwork = artworks.find(art => art.image === selectedImage);
    cart = Object.assign({}, cart, {...artwork});
  }            

  return (
    <>
      <SlimHero title={cart.title} ingress={<h5>Customize your art</h5>}></SlimHero>
      <Wrapper>
        <StyledContainer>
          <Picture image={`${cart.image}.jpg`} title={cart.title} />
          <ArtworkSelector />
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
