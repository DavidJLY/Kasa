import Card from "../Card/Card";
import "../../style/CardContainer.scss";

export function CardContainer({ cards }) {
  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card key={card.id} logement={card} />
      ))}
    </div>
  );
}
