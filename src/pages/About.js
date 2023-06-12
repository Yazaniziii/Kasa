import React from "react";

// Link
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import Banner from "../Layouts/Banner/Banner";
import Accordion from "../Components/Accordion/Accordion";

export default function About() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Accordion />
            <Footer />
        </div>
    )
}