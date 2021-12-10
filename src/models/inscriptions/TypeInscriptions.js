import { gql } from "apollo-server-express"; 

const typeInscription = gql `

    enum StateInscription { ACEPTADO RECHAZADO PENDIENTE }

    type Inscription {
        _id: ID!
        Proyecto: Project!
        Estudiante: User!
        Estado: StateInscription
        Fecha_Ingreso: Date
        Fecha_Egreso: Date
    }
    type Query {
        allInscriptions( Estado: StateInscription ): [Inscription]
        getOneInscription( _id: ID! ) : Inscription
    }
    type Mutation {
        addInscription (
            Proyecto: String!
            Estudiante: String! 
        ) : Inscription                  
        deleteInscription( _id: ID! ) : String
        updateInscription( 
            _id: ID! 
            Estado: StateInscription!
        ) : String
    }
`

export { typeInscription };