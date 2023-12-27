import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
    <Link to={"/"}>Home</Link>
    <Link to={"/sobre-nos"}>Sobre nós</Link>
    <Link to={"/contato"}>Contato</Link>
    <Link to={"/nossos-clientes"}>Nossos clientes</Link>
    <Link to={"/localizacao"}>Localização</Link>
  </div>
  )
}

export default Menu