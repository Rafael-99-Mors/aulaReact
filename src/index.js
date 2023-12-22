import React from 'react';
import ReactDOM from 'react-dom/client';
import Titulo from './Titulo';
import BotaoLegal from './BotaoLegal';
import Card from './componentes/Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card alimento={'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60'}/>
    <Card alimento= {'https://anamariabraga.globo.com/wp-content/uploads/2019/06/sucos-detox-desintoxicantes-1.jpg'}/>
  </div>
   
);