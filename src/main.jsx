// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './ErrorPage';
import Body from './views/Body/Body'
import './index.css';
import { Container } from 'postcss';
import Inicio from './views/Body/Components/Inicio';
import { News } from './views/Body/Components/News';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Inicio />,
      },
      {
        path: '/home',
        element: <Body />,
      },
      {
        path: '/criptomonedas',
        element: <Container />,
      },
      {
        path: '/news',
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
