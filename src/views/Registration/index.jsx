import React from 'react'
import "./Register.css"
import regImg from "../../images/undraw_uploading_re_okvh.svg"
import Swal from 'sweetalert2'

const Registration = () => {

    const API = "http://localhost:3001/api/v1/users"

    const [nombre, setNombre] = React.useState("")
    const [correo, setCorreo] = React.useState("")
    const [contrasenia, setContrasenia] = React.useState("")
    const [contraseniaConf, setContraseniaConf] = React.useState("")

    const insertUser = async () => {
        if(nombre.trim() !=="" && correo.trim() !== "" && contrasenia !== "" && contraseniaConf !== ""){
            if(contrasenia===contraseniaConf){
                const obj ={
                    nombre: nombre,
                    correo: correo,
                    contraseña: contrasenia
                }
                await fetch(API,{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(obj)
                })
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '¡Excelente! te has registrado',
                    showConfirmButton: false,
                    timer: 1500
                })
                setNombre("")
                setCorreo("")
                setContrasenia("")
                setContraseniaConf("")
            }else{
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Verifica las contraseñas',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }else{
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Llena todos los campos',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div className='register-content'>
            <div className='register-content__middle'>
                <img src={regImg} alt="Register" className='register-img' />
                <h2 className='register-title'>¡Registrate!</h2>
                <form action="" className='register-form'>
                    <input
                        type="text"
                        className='register-form__nombre'
                        placeholder='nombre'
                        value={nombre}
                        onChange={(e)=>{setNombre(e.target.value)}}
                    />
                    <input
                        type="email"
                        className='register-form__email'
                        placeholder='correo electronico'
                        value={correo}
                        onChange={(e)=>{setCorreo(e.target.value)}}
                    />
                    <input
                        type="text"
                        className='register-form__pwd'
                        placeholder='contraseña'
                        value={contrasenia}
                        onChange={(e)=>{setContrasenia(e.target.value)}}
                    />
                    <input
                        type="text"
                        className='register-form__pwd-confirm'
                        placeholder='confirmar contraseña'
                        value={contraseniaConf}
                        onChange={(e)=>{setContraseniaConf(e.target.value)}}
                    />
                    <button
                        type='button'
                        className='register-button'
                        onClick={() => {insertUser()}}
                    >Registrar</button>
                </form>
            </div>
        </div>
    )
}

export { Registration }