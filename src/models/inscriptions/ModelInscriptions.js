import mongoose from 'mongoose';
import ProjectModel from '../project/ModelProject';
import UserModel from '../users/ModelUser';

const Schema = mongoose.Schema;

const InscriptionSchema = new Schema ({
    Estado: { type: String, enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"], default: "PENDIENTE" },
    Fecha_Ingreso: { type: Date, default: "" },
    Fecha_Egreso: { type: Date, default: "" },
    Proyecto: { type: Schema.Types.ObjectId, required: true, ref: ProjectModel },
    Estudiante: { type: Schema.Types.ObjectId, required: true, ref: UserModel }
});

const InscriptionModel = mongoose.model('Inscripcion', InscriptionSchema, 'inscripciones');
export default InscriptionModel;