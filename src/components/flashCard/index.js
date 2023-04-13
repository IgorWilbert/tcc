import { useState } from "react";

import ArrowButton from "../arrowButton";

import FlipButton from "../flipButton";

import "./styles.css";

const FlashCard = ({ question, answer, imageUrl }) => {
  const [faceUp, setFaceUp] = useState(true);

  return (
    <div
      className="flash-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="flash-card--content">
        {faceUp && (
          <>
            <h2 className="flash-card--title">Pergunta</h2>
            <p className="flash-card--description">{question}</p>
          </>
        )}
        {!faceUp && (
          <>
            <h2 className="flash-card--title">Resposta</h2>
            <p className="flash-card--description">{answer}</p>
          </>
        )}
        <div className="flash-card--button">
          <ArrowButton
            isForward={false}
            onClick={() => console.log("backward")}
          />
          <FlipButton onClick={() => setFaceUp(!faceUp)} />
          <ArrowButton onClick={() => console.log("forward")} />
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
