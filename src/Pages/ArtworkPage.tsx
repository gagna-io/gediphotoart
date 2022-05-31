import { Link } from "react-router-dom";
import MediumHero from "../Components/MediumHero/MediumHero";

const ArtworkPage = () => {
  return (
    <div className="ArtworkPage">
      <MediumHero title="Artwork" ingress={<h3>Get back to <Link to='/'>Startpage</Link></h3>}></MediumHero>
      <h1>Artworks</h1>
      <Link to='/'>Start</Link>
    </div>
  );
}

export default ArtworkPage;
