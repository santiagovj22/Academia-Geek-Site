import React, { Component } from 'react';
import logo from '../../images/logo-ag.png';
class NavBar extends Component {

    render() {
        return (
            <header>
                 <nav class="navbar navbar-expand-md navbar-light bg-dark">
                    <div class="container">
            <a href="a" class="navbar-brand">
                <img src={logo} width='120px' height='50px'alt="logo"/>
               
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse"data-target="#firstNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="firstNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="a">Nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" href="a">Cursos</a></li>
                    <li class="nav-item"><a class="nav-link" href="a">Proyectos</a></li>
                    <li class="nav-item"><a class="nav-link" href="a">Actualizaciones</a></li>
                 </ul>
            </div>
         </div>
    </nav>
                
               
            </header>
        );
    }
}

export default NavBar;