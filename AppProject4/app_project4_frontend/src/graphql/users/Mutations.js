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

export { Update_User }