import React from 'react';
import './css/styleProjectPage.css';
import IconProject from '../../../components/images/iconProyects.png';

export default function ProjectsPage() {
    return (
        <div className="bodyLider"> 
            <div className="container">
                <img id="iconProject" src={ IconProject } alt="Project" />
                <h2 id="titleLogo">Modulo de Gestion de Proyectos</h2>
                <hr className="hrProject" />
            </div>
            <div id="containMain" className="container border mt-5">
                <form className="row g-3 m-4 mt-2">
                    <legend>Registrar un Nuevo Proyecto</legend>
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
                        <textarea className="form-control" placeholder="Introduce aqui los objetivos generales del Proyecto, puedes enlistarlos." id="floatingTextarea"></textarea>
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Objetivos Especificos</label>
                        <textarea className="form-control" placeholder="Introduce aqui los objetivos especificos del Proyecto, puedes enlistarlos." id="floatingTextarea"></textarea>
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
                </form> <br />              
            </div>     <br /><br /><br />  
        </div>
    )
}
