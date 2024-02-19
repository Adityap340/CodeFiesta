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
import QuestionPage from './pages/Quiz/QuestionPage.jsx';
import QuestionsTBT from './pages/TBT/QuestionsTBT.jsx';
import Quiz from './components/Quiz.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="select" element={<Selection />} />
      <Route path="quiz" element={<QuestionPage />} />
      <Route path="tbt" element={<QuestionsTBT />} />
      <Route path="result" component={<Quiz />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>
);
