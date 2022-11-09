import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import MetalFast from '../img/moto1.png'
import RaySpeed from '../img/moto2.png'
import SunRed from '../img/moto3.png'
import Menu from '../../Menu'
import './Produtos.css'

export default () => {
    return(
        <>
        <Menu></Menu>
        <body>
            <div id="service-principal">

                <div class="img-svcone">
                    <img src={MetalFast} alt="" width="500px" height="450"></img>
                </div>

                <div class="text-lado">
                    <h3>Metal Fast</h3>
                    <p> O protótipo de uma moto sustentável que funciona através de energia solar e pode atingir uma velocidade de 50 km/h, é a sensação entre jovens e idosos de todo o mundo, é possível atingir uma distância de até 300km. </p>
                    <p> a Metal Fast possui as mesmas características de carregamento da Red sun, portanto como o veiculo tem uma velocidade reduzida é capaz de entregar uma melhor autonomia a ser percorrida, fato que atrai o publico esperado, idosos pela maior segurança oferecida e jovens pelo seu designer inovador além da melhor experiencia em seu primeiro contato com nossa tecnologia.</p>
                    <input type="button" value="Compre Já"></input>
                </div>
            </div>
            <div id="service-principal">

                <div class="text-lado">
                    <h3>Metal Fast</h3>
                    <p> O protótipo de uma moto sustentável que funciona através de energia solar e pode atingir uma velocidade de 50 km/h, é a sensação entre jovens e idosos de todo o mundo, é possível atingir uma distância de até 300km. </p>
                    <p> a Metal Fast possui as mesmas características de carregamento da Red sun, portanto como o veiculo tem uma velocidade reduzida é capaz de entregar uma melhor autonomia a ser percorrida, fato que atrai o publico esperado, idosos pela maior segurança oferecida e jovens pelo seu designer inovador além da melhor experiencia em seu primeiro contato com nossa tecnologia.</p>
                    <input type="button" value="Compre Já"></input>
                </div>

                <div class="img-svcone">
                    <img src={RaySpeed} alt="" width="500px" height="450"></img>
                </div>

            </div>
            <div id="service-principal">

                <div class="img-svcone">
                    <img src={SunRed} alt="" width="500px" height="450"></img>
                </div>

                <div class="text-lado">
                    <h3>Metal Fast</h3>
                    <p> O protótipo de uma moto sustentável que funciona através de energia solar e pode atingir uma velocidade de 50 km/h, é a sensação entre jovens e idosos de todo o mundo, é possível atingir uma distância de até 300km. </p>
                    <p> a Metal Fast possui as mesmas características de carregamento da Red sun, portanto como o veiculo tem uma velocidade reduzida é capaz de entregar uma melhor autonomia a ser percorrida, fato que atrai o publico esperado, idosos pela maior segurança oferecida e jovens pelo seu designer inovador além da melhor experiencia em seu primeiro contato com nossa tecnologia.</p>
                    <input type="button" value="Compre Já"></input>
                </div>
            </div>
        </body>
        </>
    )
}