import { gql } from "apollo-server-core";

const typeUser = gql `

    enum Enum_Rol { ESTUDIANTE LIDER ADMINISTRADOR }
    enum Enum_Estado { PENDIENTE AUTORIZADO NO_AUTORIZADO }

    type User {
        _id: ID!
        Identificacion: String!
        Nombre: String!
        Apellido: String!
        Email: String!
        Password: String
        Rol: Enum_Rol!
        Estado: Enum_Estado
    }
    type Query {
        allUsers: [User]
        getOneUser( Identificacion: String! ) : User
    }
    type Mutation {
        addUser(
            Identificacion: String!
            Nombre: String!
            Apellido: String!
            Email: String!
            Password: String
            Rol: Enum_Rol!
            Estado: Enum_Estado
        ) : User

        updateUser(
            Identificacion: String!
            Nombre: String
            Apellido: String
            Email: String
            Password: String
            Estado: Enum_Estado
        ) : String

        deleteUser(
            Identificacion: String!
        ) : String
    }
`;

export { typeUser };