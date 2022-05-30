import { Link } from "react-router-dom";
import StartPageHero from "../Components/StartPageHero/StartPageHero";

const StartPage = () => {
  return (
    <div>
        <StartPageHero />
        <p>StartPage</p>
        <Link to='/artwork'>Artwork page</Link>
    </div>
  );
}

export default StartPage;
