import GlobalStyle from "../style/GlobalStyle";
import Corpo from "./Corpo";
import CardsConcluidos from "./CardsConcluidos";
import { useState } from "react";

export default function App() {
const [cardsRespondidos, setCardsRespondidos] = useState([]);
  return (
    <div>
      <GlobalStyle/>
      <Corpo/>
      <CardsConcluidos cardsRespondidos={cardsRespondidos}/>
    </div>
  );
}
