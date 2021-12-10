import mongoose from "mongoose";
import ModelUser from '../users/ModelUser';
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ( {
    
    Nombre: { type: String, required: true, unique: true },
    Ob_Generales: { type: String, required: true },
    Ob_Especificos: { type: String, required: true },
    Presupuesto: { type: Number, required: true },
    Fecha_Inicio: { type: Date, required: true, default: new Date() },
    Fecha_Terminacion: { type: Date, required: false, defautl: "Null" },
    Lider: { type: Schema.Types.ObjectId, required: true, ref: ModelUser },     
    Estado: { type: String, enum: [ "ACTIVO", "INACTIVO" ], default: "INACTIVO" },
    Fase: { type: String, enum: [ "INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO" ], default: "NULO" }     
}, {
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }
});

ProjectSchema.virtual('Avances', {
    ref: 'Avance',
    localField: '_id',
    foreignField: 'Proyecto'
});

ProjectSchema.virtual('Inscripciones', {
    ref: 'Inscripcion',
    localField: '_id',
    foreignField: 'Proyecto'
});

const ProjectModel = mongoose.model('Proyecto', ProjectSchema);
export default ProjectModel;