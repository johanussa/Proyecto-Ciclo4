import React, { useEffect, useState } from 'react';
import './css/estiloUsers.css';
import Swal from 'sweetalert2';
import IconUser from '../../components/images/iconUser.png';
import { Get_Users, Get_One_User } from '../../graphql/users/Queries';
import { useLazyQuery, useMutation } from '@apollo/client';
import IconEdit from '../../components/images/iconEdit.png';
import IconDelete from '../../components/images/iconDelete.png';
import { Update_User, Delete_User } from '../../graphql/users/Mutations';

export default function UsersPage() {

    const [getUsers, { loading, error, data }] = useLazyQuery(Get_Users);
    const [getOneUser, { loading : loadOne, error : errorOne, data : dataOne }] = useLazyQuery(Get_One_User);
    const [updateUser, { error : errUser, data : dataUser }] = useMutation(Update_User);
    const [deleteUser, { error : errDelete, data : dataDelete }] = useMutation(Delete_User);

    const [Rol, setRol] = useState('');
    const [IdDB, setIdDB] = useState('');
    const [Email, setEmail] = useState('');
    const [render, setRender] = useState(0);
    const [Nombre, setNombre] = useState('');
    const [Estado, setEstado] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Identificacion, setIdentificacion] = useState('');
    const [showOne, setShowOne] = useState(false);

    useEffect(() => {
        if (error || errUser || errorOne) { 
            Swal.fire({
                icon: 'error',
                title: 'Lo Siento, Algo Salio Mal!!',
                text: 'Error al consultar los datos de los usuarios',
            });  
        } 
    }, [error, data, errUser, dataUser, dataDelete, errorOne, dataOne]);

    useEffect(() => { getUsers(); }, [render, getUsers]);

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
    function deleteU(id) {
        Swal.fire({
            title: `Esta seguro que desea Eliminar este Usuario ${ id }?`,
            text: "No podra recuperarlo despues de eliminarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser({ variables : { Identificacion : id } });
                if (!errDelete) {
                    Swal.fire(
                        'Eliminado!',
                        `El usuario ${ id } ha sido eliminado`,
                        'success'
                    );
                    setRender(render +1);
                }
            }
        });
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
                            { loadOne ? 
                                <button type='button' className="input-group-text spanFilter" >
                                    Cargando
                                </button> : 
                                <button type='button' className="input-group-text spanFilter" onClick={ () => { 
                                    getOneUser({ variables : { Identificacion } });
                                    setShowOne(true); } }>
                                    Buscar Usuario
                                </button>                                
                            }
                            <input type="text" className="form-control form-control-sm inputFind" onChange={ e => { 
                                setIdentificacion(e.target.value); } } placeholder="Ingrese la Identificacion del usuario"/>
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
                            data && !showOne && data.allUsers.map(user => {
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
                                                <button className='btnIcons' onClick={ () => { deleteU(user.Identificacion); } }>
                                                    <img className='imgIcons' src={ IconDelete } alt='Eliminar' title='Eliminar'/>
                                                </button>
                                            </section>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {
                            dataOne && dataOne.getOneUser && showOne ?                             
                            <tr>
                                <td>{ dataOne.getOneUser.Identificacion }</td>
                                <td>{ dataOne.getOneUser.Nombre }</td>
                                <td>{ dataOne.getOneUser.Apellido }</td>
                                <td>{ dataOne.getOneUser.Email }</td>
                                <td>{ dataOne.getOneUser.Rol }</td>
                                <td>{ dataOne.getOneUser.Estado }</td>
                                <td>
                                    <section>
                                        <button className='btnIcons' data-bs-toggle="modal" data-bs-target="#modalEditUser" onClick={
                                            () => {
                                                setIdDB(dataOne.getOneUser._id); setIdentificacion(dataOne.getOneUser.Identificacion); 
                                                setNombre(dataOne.getOneUser.Nombre); setApellido(dataOne.getOneUser.Apellido); 
                                                setEmail(dataOne.getOneUser.Email); setRol(dataOne.getOneUser.Rol); setEstado(dataOne.getOneUser.Estado);
                                            }
                                        }>
                                            <img className='imgIcons' src={ IconEdit } alt="Editar" title='Editar'/>
                                        </button>
                                        <button className='btnIcons' onClick={ () => { deleteU(dataOne.getOneUser.Identificacion); } }>
                                            <img className='imgIcons' src={ IconDelete } alt='Eliminar' title='Eliminar'/>
                                        </button>
                                    </section>
                                </td>
                            </tr> : null
                        }
                        </tbody>
                    </table> 
                    { showOne && !loadOne ?  
                        <div className='container divbtnShow'>
                            <button className="btn btn-danger setBtnProject mb-3" type="button" onClick={ () => { setShowOne(false); } }>
                                Mostrar Todos los Usuarios
                            </button>
                        </div> : null }
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
