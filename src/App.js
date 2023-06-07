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
        <Router>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products/:id' element={<SingleProduct />}/>
            <Route path='/*' element={<PageNotFound />}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
