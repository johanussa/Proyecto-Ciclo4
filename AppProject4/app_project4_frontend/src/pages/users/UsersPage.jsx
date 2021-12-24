import React, { useEffect, useState } from 'react';
import './css/estiloUsers.css';
import Swal from 'sweetalert2';
import IconUser from '../../components/images/iconUser.png';
import { Get_Users } from '../../graphql/users/Queries';
import { useLazyQuery, useMutation } from '@apollo/client';
import IconEdit from '../../components/images/iconEdit.png';
import IconDelete from '../../components/images/iconDelete.png';
import { Update_User } from '../../graphql/users/Mutations';

export default function UsersPage() {

    const [getUsers, { loading, error, data }] = useLazyQuery(Get_Users);
    const [updateUser, { error : errUser, data : dataUser }] = useMutation(Update_User);

    const [Rol, setRol] = useState('');
    const [IdDB, setIdDB] = useState('');
    const [Email, setEmail] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Estado, setEstado] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Identificacion, setIdentificacion] = useState('');
    const [render, setRender] = useState(0);

    useEffect(() => {
        if (error || errUser) { 
            Swal.fire({
                icon: 'error',
                title: 'Lo Siento, Algo Salio Mal!!',
                text: 'Error al consultar los datos de los usuarios',
            });  
        } 
    }, [error, data, errUser, dataUser]);

    useEffect(() => { getUsers(); }, [render, getUsers])

    function update() {
        if (!errUser) {
            Swal.fire({
                icon: 'success',
                title: `El Usuario ha sido actualizado con exito!!`,
                showConfirmButton: false,
                timer: 2000
            }); 
            getUsers();
        }
    }
    function filtrar(valor) {
        if (valor === "0") { getUsers(); } 
        else { getUsers({ variables : { rol : valor } }); setRender(render +1); }
    }

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
                            <select className="form-select-sm bordColor" onChange={ e => { filtrar(e.target.value); } }>
                                <option disabled selected>Seleccione el rol del Usuario ...</option>
                                <option value="ESTUDIANTE">Estudiante</option>
                                <option value="ADMINISTRADOR">Administrador</option>
                                <option value="LIDER">Lider</option>
                                <option value="0">Mostrar Todos</option>
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
                    <table className="table table-striped table-hover divTable">
                        <thead>
                            <tr className="table-danger">
                                <th>ID</th>
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
                                                <button className='btnIcons' data-bs-toggle="modal" data-bs-target="#modalEditUser" onClick={
                                                    () => {
                                                        setIdDB(user._id); setIdentificacion(user.Identificacion); setNombre(user.Nombre);
                                                        setApellido(user.Apellido); setEmail(user.Email); setRol(user.Rol); setEstado(user.Estado);
                                                    }
                                                }>
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
            <div className="modal fade" id="modalEditUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header headColorUser">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 container mb-3">
                                <div class="col-md-6">
                                    <label class="form-label-sm">ID Data Base</label>
                                    <input type="text" class="form-control form-control-sm" disabled 
                                        value={ IdDB }/>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label-sm">Identificacion Usuario</label>
                                    <input type="text" class="form-control form-control-sm" disabled 
                                        value={ Identificacion }/>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label-sm">Nombre Usuario</label>
                                    <input type="text" class="form-control form-control-sm" 
                                        value={ Nombre } onChange={ e => { setNombre(e.target.value); } }/>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label-sm">Apellido Usuario</label>
                                    <input type="text" class="form-control form-control-sm" 
                                        value={ Apellido } onChange={ e => { setApellido(e.target.value); } }/>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label-sm">E-mail</label>
                                    <input type="text" class="form-control form-control-sm" 
                                        value={ Email } onChange={ e => { setEmail(e.target.value); } }/>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label-sm">Rol</label>
                                    <input type="text" className='form-control form-control-sm' value={ Rol } disabled/>
                                </div>
                                <div class="col-md-3">
                                    <label class="form-label-sm">Estado</label>
                                    <select defaultValue="1" className="form-select form-select-sm" 
                                        onChange={ e => { setEstado(e.target.value); } }>
                                        <option disabled value="1">{ Estado } - Defecto</option>
                                        <option value="PENDIENTE">Pendiente</option>
                                        <option value="AUTORIZADO">Autorizado</option>
                                        <option value="NO_AUTORIZADO">No Autorizado</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Cancelar
                            </button>
                            <button type="reset" className="btn btn-danger" data-bs-dismiss="modal" onClick={
                                () => { updateUser({ variables : { 
                                    Identificacion, Nombre, Apellido, Email, Estado } }); update();
                                }
                            }>
                                Guardar Cambios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
