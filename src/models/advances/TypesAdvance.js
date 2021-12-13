import { gql } from "apollo-server-express"; 

const typeAdvance = gql `
    type Advance {
        _id: ID!
        Proyecto: Project!
        Estudiante: User!
        Fecha: Date
        Descripcion: String!
        Observaciones: String
    }
    type Query {
        allAdvances: [Advance]
        filterAdvance( _id: ID! ) : [Advance]
    }
    type Mutation {
        addAdvance(
            Proyecto: String!
            Estudiante: String!
            Descripcion: String!
        ) : Advance
        updateAdvance(
            _id: ID!
            Observaciones: String!
        ) : String
    }
`

export { typeAdvance };