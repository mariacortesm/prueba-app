import '../stylesheets/HomePage.css'
import userIcon from '../Imagenes/user-icon.png'
import homeIcon from '../Imagenes/home-icon.png'
import groupIcon from '../Imagenes/group-icon.png'
import exploreUsers from '../Imagenes/explore-users.png'

function HomePage() {
    return (
        <main className='container-homepage'> 
            <section className='section-input-search'>
                <input placeholder='Buscar...' className='input-search'></input>
            </section>
            <section className='section-categories'>
                <p className='text-categories'>Categorías</p>
                <button className='button-categories'>Ciencias humanas</button>
                <button className='button-categories'>Ciencias políticas</button>
                <button className='button-categories'>Ciencias sociales</button>
            </section>
            <section className='icon-section-users'>
                <p>Explora</p>
                <img src={exploreUsers} className='icon-users'></img>
                <img src={exploreUsers} className='icon-users'></img>
                <img src={exploreUsers} className='icon-users'></img>
                <img src={exploreUsers} className='icon-users'></img>
                </section>
            <section className='icon-section'>
                <img src={homeIcon} className='icon-image'></img>
                <img src={groupIcon} className='icon-image'></img>
                <img src={userIcon} className='icon-image'></img>
            </section>
        </main>
    )
}

export default HomePage;