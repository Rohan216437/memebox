import './App.css';
import Home from './Components/Home/Home';
import Daaru from './Components/Meme/Daaru';
import Contact from './Components/Meme/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/daaru",
      element: <Daaru />
    },
    {
      path: "/contact",
      element: <Contact />
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
