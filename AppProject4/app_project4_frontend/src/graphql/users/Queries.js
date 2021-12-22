import { gql } from "@apollo/client";

const Get_Users = gql`
    query AllUsers {
        allUsers {
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