import Home from "../components/Home/index";
import AboutMe from "../components/AboutMe/index";
import Resume from "../components/Resume/index";
import Testimonial from "../components/Testimonial/index";
import ContactMe from "../components/ContactMe/index";
import Footer from "../components/Footer/index";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "Sobre",
    component: AboutMe,
  },
  {
    screen_name: "Resumo",
    component: Resume,
  },
  {
    screen_name: "Testemunhas",
    component: Testimonial,
  },
  {
    screen_name: "Contato",
    component: ContactMe,
  },
  {
    component: Footer,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
