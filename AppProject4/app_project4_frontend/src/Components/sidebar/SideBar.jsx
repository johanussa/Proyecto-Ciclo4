import React from 'react';
import './css/styleSidebar.css';
import { Link } from "react-router-dom";

export default function SideBar() {
    return (
        <div>
            <div id="divMain" class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" >
                <Link to='/' class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
                    <span class="fs-4">Alpha Team</span>
                </Link>
                <hr/>
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <Link to='/' class="nav-link active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"><use href="/"/></svg>Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to='/usuarios' class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use href="/usuarios"/></svg>Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link to='/proyectos' class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use href="#table"/></svg>Todos los Proyectos
                        </Link>
                    </li>   
                    <li>
                        <Link to='/Misproyectos' class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"><use href="#table"/></svg>Ir a Mis Proyectos
                        </Link>
                    </li>                   
                </ul>
                <hr/>
                <div class="dropdown">
                    <a href="/" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                        <strong>Johan Sebastian Ussa</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link to='/' class="dropdown-item">Configuracion</Link></li>
                        <li><Link to='/' class="dropdown-item">Perfil</Link></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><Link to='/' class="dropdown-item">Cerrar Sesion</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
