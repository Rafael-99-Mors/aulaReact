import React from 'react';
import ReactDOM from 'react-dom/client';

import BotaoLegal from './BotaoLegal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BotaoLegal texto= "Me cadastrar"/>
    <BotaoLegal texto= "Fazer Login"/>
  </div>
   
);