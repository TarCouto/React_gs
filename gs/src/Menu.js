import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import './Menu.css'




export default () => {


    return(
        <>
        <header>
        <div class="title">
            <h3>Power Moby!</h3>
        </div>
        <ul>
            <li> <Link to="/Login">Home</Link> </li>
            <li><Link to="/QuemSomos">Quem Somos</Link></li>
            <li><Link to="/Produtos">Produto</Link></li>
            <li><span class="span_menu"><Link to='/Cadastro'>Cadastre-se Aqui!</Link></span></li>
        </ul>
        </header>
        </>

    )

}