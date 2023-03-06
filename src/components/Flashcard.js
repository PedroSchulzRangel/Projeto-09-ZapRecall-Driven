import styled from 'styled-components';
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeErro from "../assets/icone_erro.png";
import { useState } from "react";

export default function Flashcard({pergunta, resposta, card, index, cardsRespondidos, setCardsRespondidos}){
    const [desabilitado, setDesabilitado] = useState(false);
    const [habilitarResposta, setHabilitarResposta] = useState(false);
    const [status,setStatus] = useState("");
    const [habilitarFraseInicial, setHabilitarFraseInicial] = useState(false);
    const mensagem = "correto com esforço";

    function incorreto (){
        setStatus("incorreto");
        alterarEstadoCardsRespondidos();
        setHabilitarFraseInicial(true);
    }

    function corretoComEsforço(){
        setStatus(mensagem);
        alterarEstadoCardsRespondidos();
        setHabilitarFraseInicial(true);
    }

    function correto(){
        setStatus("correto");
        alterarEstadoCardsRespondidos();
        setHabilitarFraseInicial(true);
    }

    function alterarEstadoCardsRespondidos(){
        if(!cardsRespondidos.includes(card)){
            setCardsRespondidos([...cardsRespondidos, card]);
        }
    }

    return (
        <div data-test="flashcard">
            <ContainerFraseInicial
            desabilitado={desabilitado}
            status={status}
            cardsRespondidos={cardsRespondidos}
            card ={card}
            habilitarFraseInicial={habilitarFraseInicial}>
                <h3 data-test="flashcard-text">Pergunta {index + 1}</h3>
                <button
                data-test="play-btn"
                onClick={() => setDesabilitado(true)}
                disabled={desabilitado}>
                    <img data-test={cardsRespondidos.includes(card)?
                        (status === "incorreto"? "no-icon": (status === "correto com esforço"? "partial-icon" : "zap-icon"))
                        : ""}
                        src={cardsRespondidos.includes(card)?
                        (status === "incorreto"? iconeErro : (status === "correto com esforço"? iconeQuase : iconeCerto))
                        : setaPlay} alt="icone"/>
                    </button>
            </ContainerFraseInicial>
            <ContainerPergunta desabilitado={desabilitado}
            habilitarResposta={habilitarResposta}
            >
                <TextoPergunta data-test="flashcard-text">{pergunta}</TextoPergunta>
                <ImagemSetaVirar data-test="turn-btn" onClick={() => setHabilitarResposta(true)} src={setaVirar} alt="seta-virar"/>
            </ContainerPergunta>
            <ContainerResposta
            habilitarResposta={habilitarResposta}
            habilitarFraseInicial={habilitarFraseInicial}
            >
                <TextoResposta data-test="flashcard-text">{resposta}</TextoResposta>
                <ContainerBotoes>
                    <BotaoNaoLembrei data-test="no-btn" onClick={incorreto}>Não lembrei</BotaoNaoLembrei>
                    <BotaoQuaseNaoLembrei data-test="partial-btn" onClick={corretoComEsforço}>Quase não lembrei</BotaoQuaseNaoLembrei>
                    <BotaoZap data-test="zap-btn" onClick={correto}>Zap!</BotaoZap>
                </ContainerBotoes>
            </ContainerResposta>
        </div>
    );
}

const ContainerFraseInicial = styled.div`
display: ${props => props.desabilitado?
(props.habilitarFraseInicial? "flex": "none"):"flex"};
justify-content: space-between;
align-items: center;
width: 300px;
height: 65px;
border-radius: 5px;
background-color: #FFFFFF;
box-shadow: 0px 4px 5px 0px #00000026;
margin-bottom: 25px;
padding-left: 15px;
padding-right: 15px;
font-family: 'Recursive', sans-serif;
font-size: 16px;
font-weight: 700;
line-height: 19.2px;
color: ${props => {
    if(props.status === "incorreto"){
        return "#ff3030";
    } else if(props.status === "correto com esforço"){
        return "#ff922e";
    } else if(props.status === "correto"){
        return "#2FBE34";
    } else{
        return "#333333";
    }
    }
    };
text-decoration: ${props => (props.cardsRespondidos).includes(props.card)? "line-through": "initial"};
`;
const ContainerPergunta = styled.div`
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
margin-bottom: 25px;
padding: 18px 15px 6px;
position: relative;
display: ${props => props.desabilitado? (props.habilitarResposta? "none": ""):"none"};
`;
const TextoPergunta = styled.h3`
width: 112px;
height: 22px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21.6px;
color: #333333;
`;

const ImagemSetaVirar = styled.img`
width: 30px;
height: 20px;
color: #333333;
position: absolute;
bottom: 10px;
right: 10px;
`;

const ContainerResposta = styled.div`
width: 300px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
margin-bottom: 23px;
padding-top: 18px;
padding-left: 15px;
padding-right: 12px;
position: relative;
display: ${props => props.habilitarResposta? (props.habilitarFraseInicial? "none" : ""): "none"};
`;
const TextoResposta = styled.h3`
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 21.6px;
color: #333333;
`;
const ContainerBotoes = styled.div`
position: absolute;
bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const BotaoNaoLembrei = styled.button`
width: 85.17px;
height: 37.17px;
margin-right: 7.74px;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 14.4px;
color: #FFFFFF;
background-color: #ff3030;
`;
const BotaoQuaseNaoLembrei = styled.button`
width: 85.17px;
height: 37.17px;
margin-right: 7.74px;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 14.4px;
color: #FFFFFF;
background-color: #ff922e;
`;
const BotaoZap = styled.button`
width: 85.17px;
height: 37.17px;
margin-right: 7.74px;
border-radius: 5px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 14.4px;
color: #FFFFFF;
background-color: #2FBE34;
`;