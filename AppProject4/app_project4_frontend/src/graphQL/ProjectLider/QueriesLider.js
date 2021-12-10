import { gql } from '@apollo/client';

const Get_ProjectsLider = gql`
    query{
        allProjects {
            _id
            Nombre
            Ob_Generales
            Ob_Especificos
            Presupuesto
            Fecha_Inicio
            Fecha_Terminacion
            Estado
            Fase
            Lider {
                _id
                Nombre
                Identificacion
                Apellido
            }
            Avances {
                Fecha
                Descripcion
                Observaciones
                Estudiante { _id }
            }   
            Inscripciones {
                Estado
                Fecha_Ingreso
                Fecha_Egreso
                Estudiante { _id }
            }         
        }
    }
`;

export { Get_ProjectsLider }