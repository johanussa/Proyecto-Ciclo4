import React, { useEffect } from 'react';
import './css/estiloUsers.css';
import IconUser from '../../components/images/iconUser.png';
import { Get_Users } from '../../graphql/users/Queries';
import { useLazyQuery } from '@apollo/client';
import IconEdit from '../../components/images/iconEdit.png';
import IconDelete from '../../components/images/iconDelete.png';

export default function UsersPage() {

    const [getUsers, { loading, error, data }] = useLazyQuery(Get_Users);

    useEffect(() => {
        getUsers();
    }, [getUsers])

    if (loading) { return <div className="container"><h5 className='container pt-5'>Loading Data ...</h5></div> }

    return (
        <div className='bodyUsers'>
            <div className="container">
                <img id="iconProject" src={ IconUser } alt="Project" />
                <h2 id="titleLogo">Modulo de Gestion de Usuarios - Administrador</h2>
                <hr className="hrProject" />
            </div>       
            <div className="container border mt-5">
                <form className='row g-3 m-5'>
                    <div className='col-md-6'>
                        <div className="input-group divFilter">
                            <span className="input-group-text spanFilter">Filtrar Usuario Por :</span>
                            <select className="form-select-sm bordColor">
                                <option disabled selected>Seleccione el rol del Usuario ...</option>
                                <option value="ESTUDIANTE">Estudiante</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                                <option value="LIDER">Lider</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="input-group">
                            <span className="input-group-text spanFilter">Buscar Usuario :</span>
                            <input type="text" className="form-control form-control-sm inputFind" placeholder="Ingrese la Identificacion del usuario"/>
                        </div>
                    </div>                    
                </form>
                <div className="container ">
                    <table class="table table-striped table-hover divTable">
                        <thead>
                            <tr className="table-danger">
                                <th>Identificacion</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>E-mail</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            data && data.allUsers.map(user => {
                                return(
                                    <tr>
                                        <td>{ user.Identificacion }</td>
                                        <td>{ user.Nombre }</td>
                                        <td>{ user.Apellido }</td>
                                        <td>{ user.Email }</td>
                                        <td>{ user.Rol }</td>
                                        <td>{ user.Estado }</td>
                                        <td>
                                            <section>
                                                <button className='btnIcons'>
                                                    <img className='imgIcons' src={ IconEdit } alt="Editar" title='Editar'/>
                                                </button>
                                                <button className='btnIcons'>
                                                    <img className='imgIcons' src={ IconDelete } alt='Eliminar' title='Eliminar'/>
                                                </button>
                                            </section>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table> 
                </div>
            </div>  <br />   
        </div>
    )
}
