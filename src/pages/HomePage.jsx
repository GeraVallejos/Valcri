import { useLocation } from "react-router-dom"
import Contacto from "../components/Contacto"
import Galeria from "../components/Galeria"
import Hero from "../components/Hero"
import Mapa from "../components/Mapa"
import Nosotros from "../components/Nosotros"
import Servicios from "../components/Servicios"
import { useEffect } from "react"

const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;

            setTimeout(() => {
                const element = document.getElementById(id);

                if (element) {
                    const navbarHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset;

                    window.scrollTo({
                        top: offsetPosition - navbarHeight,
                        behavior: "smooth"
                    });
                }
            }, 120); // Espera a que renderice el DOM
        }
    }, [location]);

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
