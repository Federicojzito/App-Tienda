import React from 'react';
import CarWidget from "./CartWidget";

export const NavBar = () =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Tienda Federico
            </a>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                    Home
                </a>
                <a class="nav-item nav-link " href="#">
                    Televisores
                </a>
                <a class="nav-item nav-link " href="#">
                    Computadoras
                </a>
                <a class="nav-item nav-link " href="#">
                    Accesorios
                </a>
            </div>
        </div>
        <CarWidget/>    
        </nav>

    );
};