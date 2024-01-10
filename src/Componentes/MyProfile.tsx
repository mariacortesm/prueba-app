import '../stylesheets/Myprofile.css'
import avatarUser from '../Imagenes/avatar-user.png'
import userProfile from '../Imagenes/user-myprofile.png'
import userIcon from '../Imagenes/user-icon.png'
import homeIcon from '../Imagenes/home-icon.png'
import groupIcon from '../Imagenes/group-icon.png'

function MyProfile() {
    return (
        <main className='myprofile-container'> 
        <section className='container'>

            <section className='section-profile-description'>
                <section>
                <img src={avatarUser} className='avatar-user'></img>
            </section>
            <section className='text-description'>
                <h2 className='welcome-text'>Nombre_usuario</h2>
                <h3 className='welcome-text'>Descripción_del_perfil</h3>
                <h4 className='welcome-text'>Ciudad</h4>
            </section>
            </section>
            <section className='group-profile'>
                <p>Personas que conoces</p>
                <img src={userProfile} className='user-profile'></img>
                <img src={userProfile} className='user-profile'></img>
                <p className='ver-mas'><a href='www.ejemplo.com'>Ver más</a></p>
            </section>
            <section>
                <p>Mensajes (2)</p>
                <p className='text-messages'>Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic magni Quis?</p>
                <p className='ver-mas'><a href='www.ejemplo.com'>Ver más</a></p>
                <p className='text-messages'>Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic magni Quis?</p>
                <p className='ver-mas'><a href='www.ejemplo.com'>Ver más</a></p>
            </section>
            <section className='icon-section'>
                <img src={homeIcon} className='icon-image'></img>
                <img src={groupIcon} className='icon-image'></img>
                <img src={userIcon} className='icon-image'></img>
            </section>
            </section>
        </main>
    )
}

export default MyProfile;