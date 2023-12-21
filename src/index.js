import React from 'react';
import ReactDOM from 'react-dom/client';
import Titulo from './Titulo';
import BotaoLegal from './BotaoLegal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Titulo titulo= "Titulo"/>
    <Titulo titulo= "Seja Bem-Vindo"/>
    <BotaoLegal texto= "Me cadastrar" emoji ="😂"/>
    <BotaoLegal texto= "Fazer Login" emoji = "🤳"/>
  </div>
   
);