import React from 'react';
import Login from "./pages/login";
import Itemlist from "./pages/itemlist";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import ProtectedRoutes from './components/protectedroute';
import Errore from './components/error';

function App() {


  return (
    <div className="wrapper">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/itemlist" element={<Itemlist />} />
          </Route>
          <Route path="*" element={<Errore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
