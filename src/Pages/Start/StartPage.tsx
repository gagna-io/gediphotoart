import { Link } from "react-router-dom";
import Wrapper from "../../Components/Layout/Wrapper";
import StartPageHero from "../../Components/StartPageHero/StartPageHero";
import Teaser from "../../Components/Teaser/Teaser";
import MainTeaserImage from './flower.jpg';

const StartPage = () => {
  return (
    <>
      <StartPageHero />
      <Wrapper>
        <Teaser
          title="Affordable art"
          text="This is the main teaser text. It will be pleanty of text so I'm guessing everything will be in text file properties because this is ridiculous"
          image={MainTeaserImage}
          action='/artworks'
          actionText='Browse artwork'
        />
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <h5>Header 5</h5>
        <h6>Header 6</h6>
      </Wrapper>
    </>
  );
}

export default StartPage;
