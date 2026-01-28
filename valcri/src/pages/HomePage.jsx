import Contacto from "../components/Contacto"
import Galeria from "../components/Galeria"
import Hero from "../components/Hero"
import Mapa from "../components/Mapa"
import Nosotros from "../components/Nosotros"
import Servicios from "../components/Servicios"

const HomePage = () => {
    return (
        <>
            <Hero />
            <Servicios />
            <Galeria />
            <Nosotros />
            <Contacto />
            <Mapa />
        </>
    )
}

export default HomePage
