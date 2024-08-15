import React from 'react';

import {
    Route,
    Routes
} from 'react-router-dom';

import Home from '../pages/Home';
import Equipe from '../pages/Equipe';
import Contratos from '../pages/Contratos';
import Custos from '../pages/Custos';
import Demandas from '../pages/Demandas';

const Router = () => {    
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/equipe' element={<Equipe/>}/>
            <Route path='/contratos' element={<Contratos/>}/>
            <Route path='/custos' element={<Custos/>}/>
            <Route path='/demandas' element={<Demandas/>}/>
        </Routes>
    );
};

export default Router;