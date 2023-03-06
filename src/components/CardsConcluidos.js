import styled from 'styled-components';
import cards from '../cards';

export default function CardsConcluidos({cardsRespondidos}){
    return (
        <ContainerConcluidos data-test="footer">
        {cardsRespondidos.length}/{cards.length} CONCLUÍDOS
        </ContainerConcluidos>
    );
}
const ContainerConcluidos = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 100%;
background-color: #FFFFFF;
box-shadow: 0px -4px 6px 0px #0000000D;
font-family: 'Recursive', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 21.6px;
color: #333333;
`