import Home from "../pages/Home"
import About from '../pages/About'
import Skill from "../pages/Skill"
import Contact from "../pages/Contact"

export const clientRoutes = [
    {
        index: true,
        element: <Home />,
        path : "/"
    },
    {
        index: true,
        element: <About />,
        path : "/about"
    },
    {
        index: true,
        element: <Skill />,
        path : "/skill"
    },
    {
        index: true,
        element: <Contact />,
        path : "/contact"
    },
]