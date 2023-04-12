import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from './components/NotFound/NotFound'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <NotFound />,
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/services',
		element: <Services />
	},
	{
		path: '/careers',
		element: <Careers />
	},
	{
		path: '/team',
		element: <Team />
	},
	{
		path: '/news',
		element: <News />
	},
	{
		path: '/contact',
		element: <Contact />
	},
]);

export default router;