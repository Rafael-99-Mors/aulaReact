import React from 'react'
import Menu from '../componentes/Menu'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Home } from '@mui/icons-material'

const Inicio = () => {
  return (
    <>
    <Menu/>
    <div>Inicio</div>
    <TextField id="outlined-basic" label="Outlined" variant='outlined'/>
    <br>
    
    </br>
    <Button variant="text" endIcon={<Home/>}>Clique em mim</Button>
    <br>
    
    </br>
    <InputLabel id="label-sexo">Sexo</InputLabel>
    <Select label= "Sexo" labelId='label-sexo'>
      <MenuItem>Masculino</MenuItem>
      <MenuItem>Feminino</MenuItem>
    </Select>
    </>
  )
}

export default Inicio