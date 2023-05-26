import React from "react";

// Link
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import Background from "../Layouts/Background/Background";
import Cards from "../Components/Cards/Cards";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Background />
            <Cards />
            <Footer />
        </div>
    )
}