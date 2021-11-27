import React from 'react';
import './css/styleProjectPage.css';

export default function ProjectsPage() {
    const roll = "Estudiante";
    return (
        <div>
            <h1>Esta es la Pagina de Proyectos ........</h1>
            <div className="container">
                <div className="card-group">
                    <div className="card m-1">
                        <i className="fas fa-laptop-house"></i>
                        <div className="card-body">
                            <h5 className="card-title">Nombre del Proyecto</h5>
                            <p className="card-text">Descripcion del proyecto</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" 
                                data-bs-target="#modalInscripcion">
                                Inscribirse
                            </button>
                        </div>
                    </div>
                    <div className="card m-1">
                        <i className="fas fa-address-card"></i>
                        <div className="card-body">
                            <h5 className="card-title">Nombre del Proyecto</h5>
                            <p className="card-text">Descripcion del proyecto</p>
                        </div>
                        <div className="card-footer">
                        { roll === "Lider" ? 
                            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" 
                                data-bs-target="#modalInscripcion">
                                Mostrar avances
                            </button> : 
                            <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" 
                                data-bs-target="#modalInscripcion">
                                Inscribirse
                            </button>                        
                        }                             
                        </div>
                    </div>
                    <div className="card m-1">
                        <i className="fas fa-chart-line"></i>
                        <div className="card-body">
                            <h5 className="card-title">Nombre del Proyecto</h5>
                            <p className="card-text">Descripcion del Proyecto</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" 
                                data-bs-target="#modalInscripcion">
                                Inscribirse
                            </button>
                        </div>
                    </div>                           
                </div>
                <div class="modal fade" id="modalInscripcion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <form action="">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Realizar Inscripcion al Proyecto</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="input-group flex-nowrap mb-1">
                                        <span className="input-group-text" id="addon-wrapping">Identificador</span>
                                        <input type="text" className="form-control form-control-sm" placeholder="Digite su # de Identificacion" required />
                                    </div>
                                    <div className="input-group flex-nowrap mb-1">
                                        <span className="input-group-text" id="addon-wrapping">Nombre</span>
                                        <input type="text" className="form-control form-control-sm" placeholder="Digite Su nombre Completo" required />
                                    </div>
                                    <div className="input-group flex-nowrap mb-1">
                                        <span className="input-group-text" id="addon-wrapping">Email</span>
                                        <input type="email" className="form-control form-control-sm" placeholder="Digite su Correo Electronico" required />
                                    </div>                                      
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    <button type="button" class="btn btn-primary">Registrame !!</button>
                                </div>                  
                            </form>                                          
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
