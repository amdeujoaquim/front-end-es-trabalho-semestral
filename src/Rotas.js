import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import AdicionarMedicoPage from './pages/adicionarmedico';
import AdicionarUserPage from './pages/adicionarUer';
import AdicionarServicoPage from './pages/adicionarServico';


import DahsboardPage from './pages/dashboard';
import LoginPage from './pages/login';


const Rotas = () => {

    return (
        <HashRouter>
            <  Routes>

                {/* login route */}
                <Route exact path="/" element={<LoginPage />} />


                {/* Rotas do guest................... */}
                <Route exact path="/home" element={<DahsboardPage />} />

                <Route exact path="/registmedico" element={<AdicionarMedicoPage />} />

                <Route exact path="/registUtilizador" element={<AdicionarUserPage />} />

                <Route exact path="/registservico" element={<AdicionarServicoPage />} />


            </  Routes>
        </HashRouter>

    )


}

export default Rotas
