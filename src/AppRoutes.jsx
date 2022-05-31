import { Route, Routes } from "react-router-dom";
import StartPage from './Pages/StartPage';
import ArtworkPage from './Pages/ArtworkPage';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' exact element={<StartPage />} />
        <Route path='/artworks' element={<ArtworkPage />} />
    </Routes>
  );
}

export default AppRoutes;

