import Deck from "./Deck";
import styled from 'styled-components';
import logo from "../assets/logo.png"

export default function Corpo(){
    return (
        <ContainerCorpo>
            <ContainerTitulo>
                <LogoDoApp src={logo} alt="logo-do-app"/>
                <TituloDoApp>ZapRecall</TituloDoApp>
            </ContainerTitulo>
            <Deck/>
        </ContainerCorpo>
    );
}

const ContainerCorpo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #fb6b6b;
border: 1px solid #dbdbdb;
height: 1000px;
`
const ContainerTitulo = styled.div`
display: flex;
margin-top: 48px;
margin-bottom: 58.96px;
`
const LogoDoApp = styled.img`
width: 52px;
height: 60px;
`
const TituloDoApp = styled.h1`
width: 203.17 px;
height: 44px;
font-family: 'Righteous', cursive;
font-weight: 400;
font-size: 36px;
line-height: 44.7px;
color: #FFFFFF;
margin-left: 20px;
`