import { Header, Footer } from "../../Components/Layout";
import { Link } from "react-router-dom";
import "../../style/ErrorPage.scss";

export function ErrorPage() {
  return (
    <div>
      <Header />
      <div className="mainError">
        <p className="numberError">404</p>
        <p className="noPage">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="errorLink">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}
