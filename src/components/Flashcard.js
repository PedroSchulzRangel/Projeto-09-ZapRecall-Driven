import styled from 'styled-components';
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import { useState } from "react";

export default function Flashcard({pergunta, resposta, card, index, cardsRespondidos, setCardsRespondidos}){
    
    const [desabilitado, setDesabilitado] = useState(false);

    return (
        <div>
            <ContainerFraseInicial desabilitado={desabilitado}>
                Pergunta {index + 1}
                <button onClick={() => setDesabilitado(true)} disabled={desabilitado}><img src={setaPlay} alt="seta-play"/></button> 
            </ContainerFraseInicial>
            <ContainerPergunta desabilitado={desabilitado} >
                <TextoPergunta>{pergunta}</TextoPergunta>
                <ImagemSetaVirar src={setaVirar} alt="seta-virar"/>
            </ContainerPergunta>
            <ContainerResposta desabilitado={desabilitado}>
                <TextoResposta>{resposta}</TextoResposta>
                <ContainerBotoes>
                    <BotaoNaoLembrei>Não lembrei</BotaoNaoLembrei>
                    <BotaoQuaseNaoLembrei>Quase não lembrei</BotaoQuaseNaoLembrei>
                    <BotaoZap>Zap!</BotaoZap>
                </ContainerBotoes>
            </ContainerResposta>
        </div>
    );
}

const ContainerFraseInicial = styled.div`
display: ${props => props.desabilitado? "none":"flex"};
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
color: #333333;
`
const ContainerPergunta = styled.div`
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
margin-bottom: 25px;
padding: 18px 15px 6px;
position: relative;
display: ${props => props.desabilitado? "":"none"};
`
const TextoPergunta = styled.h3`
width: 112px;
height: 22px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21.6px;
color: #333333;
`

const ImagemSetaVirar = styled.img`
width: 30px;
height: 20px;
color: #333333;
position: absolute;
bottom: 10px;
right: 10px;
`

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
display: none;
`
const TextoResposta = styled.h3`
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 21.6px;
color: #333333;
`
const ContainerBotoes = styled.div`
position: absolute;
bottom: 5px;
display: flex;
justify-content: space-between;
align-items: center;
`
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
`
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
`
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
`