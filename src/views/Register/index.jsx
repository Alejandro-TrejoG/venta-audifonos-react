import React from 'react'
import "./Register.css"
import regImg from "../../images/undraw_uploading_re_okvh.svg"

const Register = () => {
    return (
        <div className='register-content'>
            <div className='register-content__middle'>
                <img src={regImg} alt="Register" className='register-img' />
                <h2 className='register-title'>¡Registrate!</h2>
                <form action="" className='register-form'>
                    <input type="email" className='register-form__email' placeholder='correo electronico' />
                    <input type="text" className='register-form__pwd' placeholder='contraseña' />
                    <input type="text" className='register-form__pwd-confirm' placeholder='confirmar contraseña' />
                    <button type='button' className='register-button'>Registrar</button>
                </form>
            </div>
        </div>
    )
}

export { Register }