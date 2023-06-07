import React from "react";
import Footer from "../Layouts/Footer/Footer";
import Navbar from "../Layouts/Navbar/Navbar";
import Data from '../Datas/data.json'
import Carrousel from "../Components/Cards/Carrousel/Carrousel";


export default function SingleProduct() {
    return (
        <div>
            <Navbar />
            <Carrousel />
            <Footer />
        </div>
    )
}