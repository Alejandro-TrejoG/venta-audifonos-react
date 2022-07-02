import React from 'react'
import loginImg from "../../images/undraw_login_re_4vu2.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Login.css"
import Swal from 'sweetalert2'

const Login = () => {

    const navigate = useNavigate()
    const API = "http://localhost:3001/api/v1/users"
    const [correo, setCorreo] = React.useState("")
    const [constrasenia, setConstrasenia] = React.useState("")

    const iniciarSesion = async () => {
        const response = await fetch(API)
        const data = await response.json()
        const { body } = data
        console.log(body);
        body.forEach(item => {
            if (item.correo === correo) {
                console.log(item.correo);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Bienvenid@',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(function() {
                    navigate("/administration")
                },1000)
            }
        })

    }

    return (
        <div className='login-content'>
            <form action="" className='login-form'>
                <h2 className='login-title'> Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder='correo electronico'
                    value={correo}
                    onChange={e => { setCorreo(e.target.value) }}
                />
                <input
                    type="password"
                    placeholder='contraseña'

                    value={constrasenia}
                    onChange={e => { setConstrasenia(e.target.value) }}
                />
                <div className='login-buttons'>
                    <button
                        type='button'
                        className='login-button__enter'
                        onClick={() => { iniciarSesion() }}
                    >
                        Aceptar
                    </button>
                    <NavLink to={"/registration"} className="login-button__register" >
                        No tengo una cuenta
                    </NavLink>
                </div>
            </form>
            <img src={loginImg} alt="Login" className='login-img' />
        </div>
    )
}

export { Login }