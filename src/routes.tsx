import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ()=>{},
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      
    ],
  },
]);

export { router };
