import { gql } from '@apollo/client';

const Add_inscription = gql`
    mutation AddInscription(
        $proyecto: String!, 
        $estudiante: String!
    ) {
        addInscription(
            Proyecto: $proyecto, 
            Estudiante: $estudiante
        ) {
            _id
            Estado
            Fecha_Ingreso
            Fecha_Egreso
        }
    }
`;
const Add_Advance = gql `
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
const Update_Advance = gql`
    mutation UpdateAdvance(
        $id: ID!, 
        $observaciones: String!
        ) {
        updateAdvance(
            _id: $id, 
            Observaciones: $observaciones
        )
    }
`;
export { Add_inscription, Add_Advance, Update_Advance }