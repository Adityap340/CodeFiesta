import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './pages/Login.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Selection from './pages/Selection.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import LogoGame from './pages/TBT/LogoGame.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="select" element={<Selection />} />
      <Route path="quiz" element={<Quiz />} />
      <Route path="tbt" element={<LogoGame />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
