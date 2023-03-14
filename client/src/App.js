import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

// CSS
import './style.scss';

// Paths
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Single from './Pages/Single';
import Write from './Pages/Write';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const Layout = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <Single />
      },
      {
        path: '/write',
        element: <Write />
      }
    ],
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/single',
    element: <Single />
  },
  {
    path: '/write',
    element: <Write />
  }
])

function App() {
  return (
    <div className="app-container">
      <div className="main-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
