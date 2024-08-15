import React from 'react';

import {
    Route,
    Routes
} from 'react-router-dom';

const Router = () => {    
    return (
        <Routes>
            <Route path='/' element={<span>Home</span>}/>
            <Route path='/equipe' element={<span>Equipe</span>}/>
            <Route path='/contratos' element={<span>Contratos</span>}/>
            <Route path='/custos' element={<span>Custos</span>}/>
            <Route path='/demandas' element={<span>Demandas</span>}/>
        </Routes>
    );
};

export default Router;