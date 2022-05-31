import { Link } from "react-router-dom";
import Wrapper from "../Components/Layout/Wrapper";
import StartPageHero from "../Components/StartPageHero/StartPageHero";

const StartPage = () => {
  return (
    <>
      <StartPageHero />
      <Wrapper>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
          <Link to='/artwork'>Artwork page</Link>
      </Wrapper>
    </>
  );
}

export default StartPage;
