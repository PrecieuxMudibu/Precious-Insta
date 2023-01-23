import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
    
  </div>
);

export default App;
