import React from 'react'
import loginImg from "../../images/undraw_login_re_4vu2.svg"
import { NavLink } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    return (
        <div className='login-content'>
            <form action="" className='login-form'>
                <h2 className='login-title'> Iniciar Sesión</h2>
                <input type="text" placeholder='correo electronico' />
                <input type="password" placeholder='contraseña' />
                <div className='login-buttons'>
                    <button type='button' className='login-button__enter'>Aceptar</button>
                    <NavLink to={"/register"} className="login-button__register" >
                        No tengo una cuenta
                    </NavLink>
                </div>
            </form>
            <img src={loginImg} alt="Login" className='login-img' />
        </div>
    )
}

export { Login }