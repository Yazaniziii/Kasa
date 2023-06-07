import React from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import PageNoFound404 from "../Layouts/PageNoFound404/PageNoFound404";
import Footer from "../Layouts/Footer/Footer";

export default function PageNotFound() {
    return (
        <div className="PageNotFound">
            <Navbar />
            <PageNoFound404 />
            <Footer />
        </div>
    )
}