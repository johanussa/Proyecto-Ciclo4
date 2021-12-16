import { gql } from '@apollo/client';

const Get_ProjectsStudent = gql`
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
                Identificacion
                Nombre
                Apellido
            }       
        }
    }
`;
const Get_Advances = gql`
    query AllAdvances {
        allAdvances {
            _id
            Fecha
            Descripcion
            Observaciones
            Proyecto {
                _id
            }
            Estudiante {
                _id
            }
        }
    }
`;

export { Get_ProjectsStudent, Get_Advances }