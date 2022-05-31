import HeroImage from './hero.jpg';
import styled from 'styled-components'

const StyledHero = styled.div`
  background-image: url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  width: 100%;
  position: relative;
  &:after {
    width: 100%;
    height: 100px;
    background: linear-gradient(0deg, #030303 0%, rgb(10, 10, 10) 35%, rgba(255,255,255,.0) 80%);
    content: '';
    position: absolute;
    bottom: 0;
  }
`;

const StyledHeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 3.0em;
  color: #fafafa;
  margin-bottom: 5px;
`

const StyledIngress = styled.h3`
  padding-top: 10px;
  font-size: 1.0em;
  color: #fafafa;
  border-top: 1px solid #fafafa;
  text-transform: uppercase;
`;

const StartPageHero = () => {
  return (
    <>
      <StyledHero>
        <StyledHeroTextContainer>
          <StyledTitle>Gediphoto ART</StyledTitle>
          <StyledIngress>Photographic art &amp; inspiration</StyledIngress>
        </StyledHeroTextContainer>
      </StyledHero>
    </>
  );
}

export default StartPageHero;
