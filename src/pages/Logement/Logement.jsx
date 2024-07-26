import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Header, Footer } from "../../Components/Layout/Layout";
import Slideshow from "../../Components/Slideshow/Slideshow";
import LogementDescription from "../../Components/LogementDescription/LogementDescription";
import "../../style/Logement.scss";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => {
        const appartement = data.items.find((item) => item.id === id);
        if (appartement) {
          setLogement(appartement);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Navigate to="/errorpage" />;
  }

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
