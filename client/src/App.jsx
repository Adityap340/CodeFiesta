import './App.css';
import Navbar from './components/Navbar';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
