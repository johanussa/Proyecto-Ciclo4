import { gql } from "apollo-server-express"; 

const typeProject = gql `

    enum Estado_Proj { ACTIVO INACTIVO }
    enum Fase_Proj { INICIADO EN_DESARROLLO TERMINADO NULO }

    type Advance {
        CreadoPor: String
        Fecha_Inicio: Date
        Descripcion: String
        Observaciones: String
    }
    type Student {
        Id_Estud: String
        Nom_Estud: String
        Email: String
        Estado_Estud: String
    }
    input addAdvance {
        CreadoPor: String
        Fecha_Inicio: Date
        Descripcion: String
        Observaciones: String
    }
    input addStudent {
        Id_Estud: String
        Nom_Estud: String
        Email: String
        Estado_Estud: String
    }
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
        Est_Inscritos: [Student]  
        Avance: [Advance]    
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
            Est_Inscritos: [addStudent]  
            Avance: [addAdvance]
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
            Est_Inscritos: [addStudent]  
            Avance: [addAdvance]
        ) : String
    }
`;

export { typeProject };