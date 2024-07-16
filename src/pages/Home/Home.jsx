import React, { useState, useEffect } from "react";
import { Header, Footer } from "../../Components/Layout";
import "../../style/Home.scss";

export function Home() {
  const [logements, setLogements] = useState([]);
  useEffect(() => {
    fetch(
      "/Users/macdavid/Documents/OpenClassroom/P5/kasa/public/data/logements.json"
    )
      .then((response) => response.text())
      .then((text) => {
        console.log("Texte", text);
        return JSON.parse(text);
      })
      .then((data) => setLogements(data))
      .catch((error) => console.error("Erreur lors du fetch", error));
  }, []);
  return (
    <div>
      <Header />
      <section className="promise">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <div className="card">
        <h1>Ceci est la div pour les cards</h1>
      </div>
      <Footer />
    </div>
  );
}
