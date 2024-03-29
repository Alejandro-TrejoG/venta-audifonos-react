import React from 'react'
import loginImg from "../../images/undraw_login_re_4vu2.svg"
import { NavLink, useNavigate } from 'react-router-dom'
import "./Login.css"
import Swal from 'sweetalert2'
import { UserContext } from '../../App'

const Login = () => {

    // Usamos el contexto del usuario

    const { setUsuario, setLogged } = React.useContext(UserContext)

    const navigate = useNavigate()
    const API = "https://api-venta-audifonos.herokuapp.com/api/v1/users"
    const [correo, setCorreo] = React.useState("")
    const [contrasenia, setContrasenia] = React.useState("")

    const iniciarSesion = async () => {
        const response = await fetch(API)
        const data = await response.json()
        const { body } = data
        console.log(body);
        body.forEach(item => {
            if (correo.trim() !== "" && contrasenia.trim() !== "") {
                if (item.correo === correo && item.contraseña === contrasenia) {
                    console.log(item.correo);
                    setUsuario(item)
                    setLogged(true)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Bienvenid@',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setTimeout(function () {
                        navigate("/administration")
                    }, 1000)
                }
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Llena todos los campos',
                    showConfirmButton: false,
                    timer: 1500
                })
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
                    type='password'
                    placeholder='contraseña'
                    value={contrasenia}
                    onChange={e => { setContrasenia(e.target.value) }}
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