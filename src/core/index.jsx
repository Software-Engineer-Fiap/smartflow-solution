import React from 'react';

import { 
    BrowserRouter 
} from 'react-router-dom';

import Router from '../routes/router';

import './styles.scss';
import '../assets/styles/global.scss';

const App = () => {
    const setSelected = (url) => {
        const path = window.location.pathname;

        return path === url ? '#EBEBEB' : '#979797';
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar-top">
                    <img src=""/>

                    <div className='sidebar-items'>
                        <span><a href="/" style={{ color: setSelected('/') }}>Sobre o projeto</a></span>
                        <span><a href="/equipe" style={{ color: setSelected('/equipe') }}>Equipe</a></span>
                        <span><a href="/contratos" style={{ color: setSelected('/contratos') }}>Contratos</a></span>
                        <span><a href="/custos" style={{ color: setSelected('/custos') }}>Custos</a></span>
                        <span><a href="/demandas" style={{ color: setSelected('/demandas') }}>Demandas</a></span>
                    </div>
                </div>

                <div className="sidebar-bottom">
                    <span>SmartFlow Solution</span>
                </div>
            </div>
            <div className='content'>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;