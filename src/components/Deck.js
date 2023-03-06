import Flashcard from "./Flashcard";
import cards from "../cards";

export default function Deck({cardsRespondidos, setCardsRespondidos}){
    return (
        <>
       {cards.map((card,index) =>
       <Flashcard key={index}
       pergunta={card.question}
       resposta={card.answer}
       card={card}
       index={index}
       cardsRespondidos={cardsRespondidos}
       setCardsRespondidos={setCardsRespondidos}/>)}
        </>
    );
}