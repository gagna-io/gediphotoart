import { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ArtworkCard from "../../Components/ArtworkCard/ArtworkCard";
import Wrapper from "../../Components/Layout/Wrapper";
import MediumHero from "../../Components/MediumHero/MediumHero";
import BackendContext from "../../Contexts/BackendContext";

interface IArtwork {
  title: string;
  image: string;
}

type IArtworkResponse = Array<IArtwork>


const StyledContentGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: inline-grid;
  grid-gap: 1em;
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-device-width: 1025px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const StyledGridRow  = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ArtworkPage = () => {
  const [artwork, setArtwork] = useState<IArtworkResponse>([]);
  const [displayCount, setDisplayCount] = useState(0);
  const { artworks } = useContext(BackendContext);

  useEffect(() => {
    setArtwork(artworks);
    setDisplayCount(Math.floor(artworks.length / 3))
  }, []);

  return (
    <>
      <MediumHero title="Artwork" ingress={<h5>Shop &amp; Videos</h5>}></MediumHero>
      <Wrapper>
        <StyledContentGrid>
          <StyledGridRow>
            {artwork && artwork.slice(0, displayCount).map( (aw, index) => <ArtworkCard key={index} {...aw} /> )}
          </StyledGridRow>
          <StyledGridRow>
            {artwork && artwork.slice(displayCount, displayCount * 2).map( (aw, index) => <ArtworkCard key={index} {...aw} /> )}
          </StyledGridRow>
          <StyledGridRow>
            {artwork && artwork.slice(displayCount * 2, artwork.length).map( (aw, index) => <ArtworkCard key={index} {...aw} /> )}
          </StyledGridRow>
        </StyledContentGrid>
      </Wrapper>
    </>
  );
}

export default ArtworkPage;
