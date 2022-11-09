import React, { useState } from 'react'
import {Routes, Route, Link, Form} from 'react-router-dom'


import Contato from '../img/contact.png'

import Menu from '../../Menu'


function Cadastro(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [CPF, setCPF] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')



    const [usuario , setUsuario] = useState({
        email: "",
        senha: "",
        confirmarSenha: "",
        nome: "",
        CPF:"",

    });

    const [empresa, setEmpresa] = useState({
        email: "",
        senha: "",
        confirmarSenha: "",
        nome: "",
        CNPJ:"",

    })


    const handleChangeUsuario = e=>{
        setUsuario({... usuario, [e.target.name]: e.target.value})
    }

    const handleChangeEmpresa = e=>{
        setEmpresa({...empresa, [e.targert.name]: e.targert.value})

    }


    let metodo = "post"


    const handleSubmit = e=> {
        e.preventDefault();
    }

   
        return(
            
            <>
            <Menu></Menu>
            <body class="form_cadastro_01">
                <nav>
                    <h1>Cadastre-se <span>aqui</span>!</h1>
                    <img src={Contato} alt="" width="400px" height="200px"></img>
                    <h1>Pessoa Física</h1>
                </nav>
                <main>
                    <form action="" class="form_cadastro_01">
                        <input type="text" name="$Nome" placeholder="Nome"></input>
                        <input type="number"  name="$CPF" placeholder="CPF"></input>
                        <input type="email" name="$email" placeholder="E-mail"></input>
                        <input type="password" name="$senha"placeholder="Senha"></input>
                        <input type="password" name="$confirmarsenha"placeholder="Confirmar Senha"></input>
                        <input type="submit"></input>
                        <input type="reset" value="Limpar"></input>
                    </form>
                </main>

                <nav>
                    <h1>Empresa</h1>
                </nav>

                <main>
                    <form action="" class="form_cadastro_01">
                    <input type="text" name="$NomeE" placeholder="Nome"></input>
                        <input type="number" name="$CNPJ" placeholder="CNPJ"></input>
                        <input type="email" name="$E-mailE"placeholder="E-mail"></input>
                        <input type="password" name="$SenhaE"placeholder="Senha"></input>
                        <input type="password" name="$ConfirmarSenhaE"placeholder="Confirmar Senha"></input>
                        <input type="submit"></input>
                        <input type="reset" value="Limpar"></input>
                    </form>
                </main>
                
            </body>
            </>
            
        )
}

export default Cadastro

