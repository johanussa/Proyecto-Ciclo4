import mongoose from "mongoose";
import ProjectModel from '../project/ModelProject';
import UserModel from '../users/ModelUser';
const Schema = mongoose.Schema;

const AdvanceShema = new Schema ({
    Fecha: { type : Date, default: Date.now() },
    Descripcion: { type: String, required: true },
    Observaciones: { type: String, default: "NULL" },
    Proyecto: { type: Schema.Types.ObjectId, required: true, ref: ProjectModel },
    Estudiante: { type: Schema.Types.ObjectId, required: true, ref: UserModel }
});

const AdvanceModel = mongoose.model('Avance', AdvanceShema);
export default AdvanceModel;