import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Login } from './views/Login';
import { Registration } from './views/Registration';
import { Administration } from './views/Administration';
import './App.css';


const UserContext = React.createContext()
function App() {
  const [usuario, setUsuario] = React.useState({})
  const [productosUsuario, setProductosUsuario] = React.useState([])
  return (
    <UserContext.Provider
      value={
        {
          usuario,
          setUsuario,
          productosUsuario,
          setProductosUsuario
        }
      }
    >
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/administration' element={<Administration />} />
      </Routes>
    </UserContext.Provider>
  );
}

export { App, UserContext };
