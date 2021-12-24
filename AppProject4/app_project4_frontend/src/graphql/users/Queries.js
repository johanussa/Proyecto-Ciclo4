import { gql } from "@apollo/client";

const Get_Users = gql`
    query AllUsers( $rol: Enum_Rol ) {
        allUsers( Rol: $rol ) {
            _id
            Identificacion
            Nombre
            Apellido
            Email
            Rol
            Estado
        }
    }
`;

export { Get_Users }