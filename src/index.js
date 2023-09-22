import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './Dashboard';
import CadastroUsuario from "./pages/CadastroUsuario";
import ErroPage from './pages/ErroPage';
import App from './pages/App';
import CadastroProduto from './pages/CadastroProduto';
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFAEFA',
      light: '##FFAEFA',
      dark: '#FFAEFA',
      contrastText: '##000000',
    },
    secondary: {
      main: '#000000',
      light: '#ff0700',
      dark: '#ff1000',
    },
    text: {
      primary: '#000',
      secondary: '#FFAEFA',
      hint: '#ffb74d',
      disabled: '#0ebd3a',
    },
    error: {
      main: '#ff3c00',
      contrastText: '#ffebee',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#0073b3',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#5109b3',
    background: {
      default: '#ffebee',
      paper: '#ffebee',
    },
  },
  typography: {
    fontFamily: 'Oswald',
    fontWeightLight: 700,
    fontWeightRegular: 700,
    fontWeightMedium: 700,
    button: {
      fontWeight: 1000,
      fontSize: '1rem',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErroPage />
  },
  {
    path: "/cadastro",
    element: <CadastroUsuario />,
    errorElement: <ErroPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children:[
      {
        path: "produtos",
        element: <App />
      },
      {
        path: "cadastro/produto",
        element: <CadastroProduto />
      },
      {
        path: "editar/produto/:id",
        element: <CadastroProduto />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
