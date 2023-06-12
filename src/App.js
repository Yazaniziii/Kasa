// Dépendances
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// style
import "./main.css"

//pages by react Router
import Home from './pages/Home'
import About from './pages/About';
import PageNotFound from './pages/PageNoFound';
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <div>
      <div className="App">
        {/* Initialisation du router */}
        <Router>
          {/* Définition des différentes routes */}
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route index element={<Home />} />

            {/* Route pour la page "About" */}
            <Route path="/about" element={<About />} />

            {/* Route pour les produits individuels avec un paramètre "id" */}
            <Route path="/products/:id" element={<SingleProduct />} />

            {/* Route pour toutes les autres URL non définies */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
