import Flashcard from "./Flashcard";
import cards from "../cards"

export default function Deck(){
    return (
        <>
       {cards.map((card,index) => 
       <Flashcard key={index} 
       pergunta={card.question} 
       resposta={card.answer} 
       index={index}/>)}
        </>
    );
}