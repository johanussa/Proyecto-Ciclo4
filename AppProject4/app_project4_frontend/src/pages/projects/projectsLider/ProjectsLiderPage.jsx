import React from 'react';
import './css/styleProjectPage.css';
import IconProject from '../../../components/images/iconProyects.png';

export default function ProjectsPage() {
    const icons = [<i className="fas fa-external-link-alt"></i>];
    return (
        <div className="bodyLider"> 
            <div className="container">
                <img id="iconProject" src={ IconProject } alt="Project" />
                <h2 id="titleLogo">Modulo de Gestion de Proyectos</h2>
                <hr className="hrProject" />
            </div>
            <div id="containMain" className="container border mt-5">
                <form className="row g-3 m-4 mt-2">
                    <div>                        
                        <legend>{ icons[0] } Registrar un Nuevo Proyecto</legend>  
                    </div>                                      
                    <div className="col-md-6">
                        <label htmlFor="inputNomP" className="form-label">Nombre del Proyecto</label>
                        <input type="text" className="form-control" id="inputNomP" 
                            placeholder="Digite el nombre que le dara al proyecto" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputID" className="form-label">Presupuesto Proyecto</label>
                        <input type="number" className="form-control" id="inputID" 
                            placeholder="Digite el presupuesto que tendra el proyecto" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="floatingTextarea" className="form-label">Objetivos Generales</label>
                        <textarea className="form-control" placeholder="Introduce aqui los objetivos generales del Proyecto, 
                            puedes enlistarlos." id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Objetivos Especificos</label>
                        <textarea className="form-control" placeholder="Introduce aqui los objetivos especificos del Proyecto, 
                            puedes enlistarlos." id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputNomP" className="form-label">Numero Identificador Lider</label>
                        <input type="text" className="form-control" id="inputNomP" 
                            placeholder="Identificacion del lider del proyecto" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputID" className="form-label">Nombre Lider de Proyecto</label>
                        <input type="number" className="form-control" id="inputID" 
                            placeholder="Nombre del Lider del proyecto" />
                    </div>
                    <div className="setDivProject col-md-6 mt-5">
                        <button className="btn btn-secondary setBtnProject" type="reset" >Limpiar Campos</button>                        
                    </div>   
                    <div id="div2Project" className="setDivProject col-md-6 mt-5">
                        <button className="btn btn-primary setBtnProject" type="button" >
                            Registrar Proyecto !!
                        </button>                         
                    </div> 
                    <legend>{ icons[0] } Proyectos Registrados</legend> 
                    <div id="divCards" className="card-group row g-3">
                        <div className="col-md-4">
                            <div class="card text-dark mb-3">
                                <div class="card-header headColor row g-0">
                                    <div className="col-md-3 mt-1"><i class="fas fa-shield-virus iconCard"></i></div>
                                    <div className="col-md-9">
                                        Nombre del Proyecto
                                    </div>                                    
                                </div>
                                <div class="card-body">                                   
                                    <h5 class="card-title">Autor</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-4">
                            <div class="card text-dark mb-3">
                                <div class="card-header headColor row g-0">
                                    <div className="col-md-3 mt-1"><i class="fas fa-shield-virus iconCard"></i></div>
                                    <div className="col-md-9">
                                        Nombre del Proyecto
                                    </div>                                    
                                </div>
                                <div class="card-body">                                   
                                    <h5 class="card-title">Autor</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>    
                        <div className="col-md-4">
                            <div class="card text-dark mb-3">
                                <div class="card-header headColor row g-0">
                                    <div className="col-md-3 mt-1"><i class="fas fa-shield-virus iconCard"></i></div>
                                    <div className="col-md-9">
                                        Nombre del Proyecto
                                    </div>                                    
                                </div>
                                <div class="card-body">                                   
                                    <h5 class="card-title">Autor</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </div>
                            </div>
                        </div>                               
                    </div>                       
                </form>    
                
            </div> <br />            
        </div>
    )
}
