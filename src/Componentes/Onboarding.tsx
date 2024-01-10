import imageOnboarding from '../Imagenes/imagen-onboarding.jpeg';
import '../stylesheets/Onboarding.css'

function Onboarding () {
    return (
        <main className='onboarding-container'> 
            <section className='section-onboarding'>
            <p className='description-one'>¡En VORTEX SOLUCIONES impulsamos tus ideas de investigación!</p>
            <img className='image-onboarding' src={imageOnboarding} alt='Imagen-de-onboarding'></img>
            <p className='description-two'>Te conectamos con escritores expertos para mejorar tus trabajos y ofrecerte la oportunidad de destacar. Tu camino hacia el éxito académico comienza aquí.</p>
            </section>
            <section className='section-bton'>
                <button className='bton-onboarding'>SIGUIENTE</button>
            </section>
        </main>
    )
}

export default Onboarding;