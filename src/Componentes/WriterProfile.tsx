import '../stylesheets/WriterProfile.css'
import userIcon from '../Imagenes/user-icon.png'
import homeIcon from '../Imagenes/home-icon.png'
import groupIcon from '../Imagenes/group-icon.png'
import avatarWriter from '../Imagenes/avatar-writer.png'
import ratignWriter from '../Imagenes/rating-writer.png'
import shareFile from '../Imagenes/share-file.png'
import avatarUserRating from '../Imagenes/avatar-user-rating.png'

function WriterProfile() {
    return (
        <main className='container-writerprofile'> 
            <section className='section-info-writer'> 
                <section>
                <img src={avatarWriter} className='avatar-writer'></img>
                </section>
                <section> 
                    <h2 className='writer-text'>Nombre_usuario</h2>
                    <h3 className='writer-text'>Descripción_del_perfil</h3>
                    <img src={ratignWriter} className='rating-writer'></img>
                    <button className='bton-writer'>Conectar</button>
                </section>
            </section>
            <section>
                <p>Reseñas y comentarios</p>
                <section className='section-user-rating'>
                <img src={avatarUserRating} className='avatar-user-rating'></img>
                <p className='text-messages'>Lorem ipsum dolor sit amet.</p>
                </section>
                <section className='section-user-rating'>
                    <img src={avatarUserRating} className='avatar-user-rating'></img>
                    <p className='text-messages'>Lorem ipsum dolor sit amet.</p>
                </section>
                <p className='ver-mas'><a href='www.ejemplo.com'>Ver más</a></p>
            </section>
            <section>
                <p>Perfil profesional</p>
                <p className='text-messages'>Lorem ipsum dolor sit amet. Hic autem placeat in atque dolor hic magni Quis?</p>
            </section>
            <section>
                <p>Compartir archivo</p>
                <img src={shareFile} className='share-file'></img>
            </section>
            <section className='icon-section'>
                <img src={homeIcon} className='icon-image'></img>
                <img src={groupIcon} className='icon-image'></img>
                <img src={userIcon} className='icon-image'></img>
            </section>
        </main>
    )

}

export default WriterProfile;