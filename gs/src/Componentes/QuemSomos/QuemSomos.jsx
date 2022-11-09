import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import Missao from '../img/2835_R1NUIEpPUyAwNDItMjg.png'
import Visao from '../img/img1.png'
import Valores from '../img/2835_R1NUIEpPUyAwNDItMzg.png'
import Menu from '../../Menu'
import './QuemSomos.css'




export default () => {
    return(
        <>
        <Menu></Menu>
        <main class="main_login">
            <div class="principal">
                <div class="container1">
                    <h3>Missao</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quisquam sint explicabo officia incidunt ad soluta enim odio ipsa? Minus maiores perspiciatis eligendi, exercitationem provident iure earum eius doloribus magni?</p>
                    <img src={Missao} alt="" width="400px" height="350px"/>
                </div>
                <div class="container1">
                    <h3>Visao</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quisquam sint explicabo officia incidunt ad soluta enim odio ipsa? Minus maiores perspiciatis eligendi, exercitationem provident iure earum eius doloribus magni?</p>
                    <img src={Visao} alt="" width="400px" height="350px"/>
                </div>
                <div class="container1">
                    <h3>Valores</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quisquam sint explicabo officia incidunt ad soluta enim odio ipsa? Minus maiores perspiciatis eligendi, exercitationem provident iure earum eius doloribus magni?</p>
                    <img src={Valores} alt="" width="400px" height="350px"/>
                </div>
            </div>
        </main>
        </>
    )
}