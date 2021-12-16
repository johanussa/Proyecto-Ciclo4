import { gql } from '@apollo/client';

const New_Project = gql`
    mutation AddProject(
        $Nombre: String!, 
        $Ob_Generales: String!, 
        $Ob_Especificos: String!, 
        $Presupuesto: Float!, 
        $Lider: String!
    ) {
        addProject(
            Nombre: $Nombre, 
            Ob_Generales: $Ob_Generales, 
            Ob_Especificos: $Ob_Especificos, 
            Presupuesto: $Presupuesto, 
            Lider: $Lider
        ) {
        _id
        Nombre
        }
    }
`;
const Update_Project = gql`
    mutation UpdateProject(
        $id: ID!, 
        $Nombre: String!, 
        $Ob_Generales: String!, 
        $Ob_Especificos: String!, 
        $Presupuesto: Float!, 
    ) {
        updateProject(
            _id: $id,
            Nombre: $Nombre,
            Ob_Generales: $Ob_Generales,
            Ob_Especificos: $Ob_Especificos,
            Presupuesto: $Presupuesto
        )
    }
`;
const Update_Inscription = gql`
    mutation UpdateInscription(
        $id: ID!, 
        $Estado: StateInscription!
    ) {
        updateInscription(
            _id: $id, 
            Estado: $Estado
        )
    }
`;
const Update_Advance = gql`
    mutation UpdateAdvance(
        $id: ID!, 
        $Observaciones: String!
    ) {
        updateAdvance(
            _id: $id, 
            Observaciones: $Observaciones
        )
    }
`;
const Add_Observation = gql`
    mutation AddAdvance(
        $proyecto: String!, 
        $estudiante: String!, 
        $descripcion: String!
    ) {
        addAdvance(
            Proyecto: $proyecto, 
            Estudiante: $estudiante, 
            Descripcion: $descripcion
        ) {
            _id
        }
    }
`;

export { 
    New_Project, Update_Project, 
    Update_Inscription, Add_Observation, 
    Update_Advance 
}