import { gql } from "apollo-server-express"; 

const typeProject = gql `

    enum Estado_Proj { ACTIVO INACTIVO }
    enum Fase_Proj { INICIADO EN_DESARROLLO TERMINADO NULO }

    type Project {
        _id: ID!
        Nombre: String!
        Ob_Generales: String!
        Ob_Especificos: String!
        Presupuesto: Float!
        Fecha_Inicio: Date
        Fecha_Terminacion: Date
        Lider: User!        
        Estado: Estado_Proj
        Fase: Fase_Proj      
    }
    type Query {
        allProjects: [Project] 
        getOneProject( _id: ID! ) : Project
    }
    type Mutation {
        addProject(
            Nombre: String!
            Ob_Generales: String!
            Ob_Especificos: String!
            Presupuesto: Float!
            Fecha_Inicio: Date
            Fecha_Terminacion: Date
            Lider: String!            
            Estado: Estado_Proj
            Fase: Fase_Proj    
        ) : Project

        deleteProject( _id: ID! ) : String

        updateProject(
            _id: ID!
            Nombre: String
            Ob_Generales: String
            Ob_Especificos: String
            Presupuesto: Float
            Fecha_Inicio: Date
            Fecha_Terminacion: Date
            Lider: String            
            Estado: Estado_Proj
            Fase: Fase_Proj  
        ) : String
    }
`;

export { typeProject };