import { Route, Routes } from "react-router-dom";
import StartPage from './Pages/Start/StartPage';
import ArtworkPage from './Pages/Artwork/ArtworkPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<StartPage />} /> {/* exact */}
      <Route path='/artworks' element={<ArtworkPage />} />
    </Routes>
  );
}

export default AppRoutes;
