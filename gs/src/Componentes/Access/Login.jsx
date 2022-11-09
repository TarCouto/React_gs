import React, { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'




import Icone from '../img/icone.png'
import Menu from '../../Menu'


function Login(){

    const [Email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    const login = () => {
        
        const infoLogin = {
            Email: Email,
            senha: senha,
        }
        

    }    
        return(
            <>
            <Menu></Menu>
            <main class="main_login">
                <aside class="forms_login">
                    <span><h1>Seja Bem Vindo</h1></span>
                    <h1>à Power Moby</h1>

                    <p>A inovação do mercado começa por aqui...</p>

                    <form action="">
                        <input type="email"placeholder="E-mail" onChange={event => setEmail(event.target.value)}></input>
                        <input type="password" placeholder="Password" onChange={event => setSenha(event.target.value)}></input>
                        <input type="submit"></input>
                    </form>
                </aside>
                <article>
                    <img src={Icone}/>
                </article>
            </main>
            </>
    
        )
}

export default Login