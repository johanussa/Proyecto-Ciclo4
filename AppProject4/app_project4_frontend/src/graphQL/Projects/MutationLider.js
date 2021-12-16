import { gql } from '@apollo/client';

const New_Project = gql`
    mutation AddProject(
        $nombre: String!, 
        $obGenerales: String!, 
        $obEspecificos: String!, 
        $presupuesto: Float!, 
        $lider: String!
    ) {
        addProject(
            Nombre: $nombre, 
            Ob_Generales: $obGenerales, 
            Ob_Especificos: $obEspecificos, 
            Presupuesto: $presupuesto, 
            Lider: $lider
    ) {
        _id
        Nombre
    }
    }
`;
const Update_Project = gql`
    mutation UpdateProject(
        $id: ID!, 
        $nombre: String, 
        $obGenerales: String, 
        $obEspecificos: String, 
        $presupuesto: Float
    ) {
        updateProject(
            _id: $id,
            Nombre: $nombre,
            Ob_Generales: $obGenerales,
            Ob_Especificos: $obEspecificos,
            Presupuesto: $presupuesto
        )
    }
`;
const Update_Inscription = gql`
    mutation UpdateInscription(
        $id: ID!, 
        $estado: StateInscription!
    ) {
        updateInscription(
            _id: $id, 
            Estado: $estado
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

export { New_Project, Update_Project, Update_Inscription, Add_Observation }