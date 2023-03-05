import styled from 'styled-components';
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"

export default function Flashcard({pergunta, resposta, index}){
    return (
        <ContainerFlashcard>
            <FraseInicial>
                Pergunta {index + 1}
                <img src={setaPlay} alt="seta-play"/> 
            </FraseInicial>
            <ContainerPergunta >
                <TextoPergunta>{pergunta}</TextoPergunta>
                <ImagemSetaVirar src={setaVirar} alt="seta-virar"/>
            </ContainerPergunta>
            <Resposta></Resposta>
        </ContainerFlashcard>
    );
}
const ContainerFlashcard = styled.div`
//position: relative;`

const FraseInicial = styled.div`
display: flex;
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
display: none;
//position: absolute;
`
const ContainerPergunta = styled.div`
//position: absolute;
width: 299px;
height: 131px;
border-radius: 5px;
background-color: #FFFFD4;
box-shadow: 0px 4px 5px 0px #00000026;
margin-bottom: 25px;
padding: 18px 15px 6px;
position: relative;
`
const TextoPergunta = styled.h3`
width: 112px;
height: 22px;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21.6px;
color: #333333;`

const ImagemSetaVirar = styled.img`
width: 30px;
height: 20px;
color: #333333;
position: absolute;
bottom: 10px;
right: 10px;
`

const Resposta = styled.div`
//position: absolute;`