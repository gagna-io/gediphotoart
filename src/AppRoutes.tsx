import { Route, Routes } from "react-router-dom";
import StartPage from './Pages/Start/StartPage';
import ArtworkPage from './Pages/Artwork/ArtworkPage';
import ArtworkDetailsPage from "./Pages/ArtworkDetails/ArtworkDetailsPage";
import CartContext from "./Contexts/CartContext";
import { useState } from "react";

const AppRoutes = () => {
  const [cart, setCart] = useState({image: '', title: '', inCart: ''});
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path='/' element={<StartPage />} /> {/* exact */}
        <Route path='/artworks' element={<ArtworkPage />} />
        <Route path='/artwork/*' element={<ArtworkDetailsPage title='hej' image='m81-m82' />} />
      </Routes>
    </CartContext.Provider>
  );
}

export default AppRoutes;
