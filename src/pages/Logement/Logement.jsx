import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../../Components/Layout/Layout";
import Slideshow from "../../Components/Slideshow/Slideshow";
import LogementDescription from "../../Components/LogementDescription/LogementDescription";
import "../../style/Logement.scss";

function Logement() {
  const { id } = useParams(); //Recupération de l'ID de l'url
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        //récupérer les informations de l'appartement correspondant à l'id
        const appartement = data.items.find((item) => item.id === id);
        setLogement(appartement);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!logement) {
    return <div>Loading...</div>; // Affiche un indicateur de chargement pendant la récupération des données
  }

  console.log(logement);
  return (
    <div>
      <Header />
      <div className="ficheLogement">
        <Slideshow logement={logement} />
        <LogementDescription logement={logement} />
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
