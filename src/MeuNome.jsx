import React, { useState } from 'react'

const MeuNome = () => {
  const [nome,setNome] = useState('Rafael')
  
  function alterarNome() {

    setNome(prompt("Digite o nome do desejado"))
  }

  return (
    <div>
      
      Meu nome é { nome }
      <button onClick={ alterarNome }> Alterar Nome </button>
    </div>
  )
}

export default MeuNome