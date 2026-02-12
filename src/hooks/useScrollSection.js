import { useLocation, useNavigate } from "react-router-dom";

export const useScrollSection = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {



    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);

    if (element) {
      // 1. Obtenemos la posición del elemento respecto al documento
      const elementPosition = element.getBoundingClientRect().top;

      // 2. Obtenemos la posición actual del scroll
      const offsetPosition = elementPosition + window.pageYOffset;

      // 3. Restamos la altura de tu navbar (ejemplo: 80px)
      // Ajusta este número según el alto real de tu navbar
      const navbarHeight = 80;

      window.scrollTo({
        top: offsetPosition - navbarHeight,
        behavior: "smooth"
      });
    }
  };

  return scrollTo;
};