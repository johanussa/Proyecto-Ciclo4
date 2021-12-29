import React from 'react';
import './css/styleLogin.css';
import Logo from '../../components/images/Alpha_Team_logo.png';

export default function LoginPage() {
    return (
        <div className='bodyLogin'>
            <div className="login-box">
                <img className='logo' src={ Logo } alt="Alpha Team" />
                <h1 className='titleLog mt-4'>Inicio de Sesion</h1>     
                <form >
                    <div className="container">
                        <label className='labelLog'>E-mail</label>    
                        <input className='inputLog' type="email" placeholder='Ingrese Su Correo Electronico'/>
                        <label className='labelLog'>Contraseña</label>    
                        <input className='inputLog' type="password" placeholder='Ingrese Su Contraseña'/>
                    </div>
                    <div className="divLink">
                        <a className="linkLogin" href="/">Olvidaste tu contraseña ?</a> <br />
                    </div>
                    <button id='btnLog' type='submit'>Iniciar Sesion</button>
                    <div className="divLink2">
                        <a className="linkLogin" href="/">No tienes una cuenta ? <b> Registrate!!</b></a> <br />
                    </div>
                </form>           
            </div>
        </div>
    )
}
