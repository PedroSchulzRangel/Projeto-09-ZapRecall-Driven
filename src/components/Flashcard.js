import styled from 'styled-components';
import setaPlay from "../assets/seta_play.png"

export default function Flashcard({pergunta, resposta, index}){
    return (
        <ContainerFlashcard>
            <FraseInicial>
                Pergunta {index + 1}
                <img src={setaPlay} alt="seta"/> 
            </FraseInicial>
            <Pergunta ></Pergunta>
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
//position: absolute;
`
const Pergunta = styled.div`
//position: absolute;`

const Resposta = styled.div`
//position: absolute;`