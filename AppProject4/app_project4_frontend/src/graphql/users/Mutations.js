import { gql } from "@apollo/client";

const Update_User = gql`
    mutation UpdateUser(
        $Identificacion: String!, 
        $Nombre: String, 
        $Apellido: String, 
        $Email: String, 
        $Password: String, 
        $Estado: Enum_Estado
        ) {
        updateUser(
            Identificacion: $Identificacion, 
            Nombre: $Nombre, 
            Apellido: $Apellido, 
            Email: $Email, 
            Password: $Password, 
            Estado: $Estado
        )
    }
`;
const Delete_User = gql`
    mutation DeleteUser(
        $Identificacion: String!
    ) {
        deleteUser(
            Identificacion: $Identificacion
        )
    }
`;

export { Update_User, Delete_User }