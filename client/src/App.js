import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Students from "./pages/Students";

import './styling.css'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/courses',
        element: <Courses/>
      },
      {
        path: '/students/:id',
        element: <Students/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
