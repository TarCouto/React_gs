import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from '../src/Componentes/Access/Login'
import QuemSomos from '../src/Componentes/QuemSomos/QuemSomos'
import Produtos from '../src/Componentes/Produtos/Produtos'
import Cadastro from './Componentes/Cadastro/Cadastro'



export default () =>{

  return(
    <Router>
            <Routes>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/QuemSomos' element={<QuemSomos/>}/>
                <Route path='/Produtos' element={<Produtos/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
            </Routes>
        </Router>
  )
}