import FlashCard from "../../components/flashCard";

import "./styles.css";

const FlashCards = () => (
  <div className="flash-cards">
    Flash Cards
    <FlashCard
      imageUrl={"https://source.unsplash.com/random/300×300"}
      question="Qual é o nome da taxa que mede o valor da inflação no Brasil?"
      answer="O nome da taxa que mede a inflação no Brasil é Índice Nacional de Preços ao Consumidor Amplo (IPCA)"
    />
  </div>
);

export default FlashCards;
