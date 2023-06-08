import React from "react";
import { useParams, Navigate } from "react-router-dom"; // useParams est un hook fourni par la bibliothèque react-router-dom, qui permet d'extraire les paramètres de l'URL
import Data from "../Datas/data.json";
import Footer from "../Layouts/Footer/Footer";
import Navbar from "../Layouts/Navbar/Navbar";
import Carrousel from "../Components/Carrousel/Carrousel";
import Housing from "../Components/Housing/Housing";

export default function SingleProduct() {
  const { id } = useParams(); //Hook qui extrait la valeur du paramètre "id" de l'URL et l'assigne à la constante id.

  const selectedHousing = Data.find((housing) => housing.id === id); // On utilise la méthode find sur le tableau Data pour rechercher l'objet logement qui a un id correspondant à la valeur extraite de l'URL (id).
  // la fonction fléchée, housing représente chaque élément du tableau Data à chaque itération.
  
  if (!selectedHousing) {
    return <Navigate to="/error" />; // Redirection vers la page d'erreur
  }

  return (
    <div>
      <Navbar />
      <Carrousel pictures={selectedHousing.pictures} /* Prop qui sélectionne les photos du Carrousel dans le tableau du fichier data.json */ />
      
      <Housing
        title={selectedHousing.title}
        description={selectedHousing.description}
        hostName = {selectedHousing.host.name}
        hostPicture = {selectedHousing.host.picture}
        rating = {selectedHousing.rating}
        location = {selectedHousing.location}
        equipments = {selectedHousing.equipments}
        tags = {selectedHousing.tags}
      />
      <Footer />
    </div>
  );
}