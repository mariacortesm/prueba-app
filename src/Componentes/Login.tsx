import '../stylesheets/Login.css'
import imageLogin from '../Imagenes/image-login.png'
import iconoMail from '../Imagenes/icono-mail.png'
import iconoPassword from '../Imagenes/icono-contrasena.png'

function Login () {
    return (
        <main className='login-container'>
            <section className='section-text-login'>
                <img src={imageLogin} className='image-login'></img>
                <h1 className='welcome-text'>¡INICIA SESIÓN!</h1>
                <h2 className='welcome-text'>Inicia sesión para continuar</h2>
            </section>
            <section className='section-input'>
                <img src={iconoMail} className='image-input'></img>
                <input placeholder='Correo_electrónico' className='input-text'></input>
            </section>
            <section className='section-input'>
                <img src={iconoPassword} className='image-input'></img>
                <input placeholder='Contraseña' className='input-text'></input>
            </section>
            <section className='section-bton-login'>
                <button className='bton-input'>INICIAR SESIÓN</button>
            </section>
        </main>
    )
}

export default Login;