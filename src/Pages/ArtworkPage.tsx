import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import ArtworkCard from "../Components/ArtworkCard/ArtworkCard";
import Wrapper from "../Components/Layout/Wrapper";
import MediumHero from "../Components/MediumHero/MediumHero";

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

  useEffect(() => {
    const backendMock: IArtworkResponse = [
      {
        title: 'Velvet',
        image: 'velvet'
      },
      {
        title: 'Misty lake',
        image: 'lake-of-fog'
      },
      {
        title: 'In the eye of',
        image: 'in-the-eye-of-the'
      },
      {
        title: 'Milky way',
        image: 'milky-way'
      },
      {
        title: 'Archipelago',
        image: 'archipelago'
      },
      {
        title: 'Blue tit',
        image: 'blue-tit'
      },
      {
        title: 'Creek',
        image: 'creek'
      },
      {
        title: 'Flower',
        image: 'flower'
      },

      {
        title: 'Highway',
        image: 'highway'
      },
      {
        title: 'Lake of fog',
        image: 'lake-of-fog'
      },
      {
        title: 'Owl',
        image: 'owl'
      },
      {
        title: 'Stadshagen',
        image: 'stadshagen'
      },
      {
        title: 'Sunset in the forest',
        image: 'sunset'
      },
      {
        title: 'Surpriced',
        image: 'surpriced'
      },
      {
        title: 'Symmetry',
        image: 'symmetry'
      }
    ];
    setArtwork(backendMock);
    setDisplayCount(Math.floor(backendMock.length / 3))
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
