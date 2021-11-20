import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Rol: { type: String, required: true },
        enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],         
    Estado: { type: String, required: true, default: "PENDIENTE",
        enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"], }
});

const UserModel = mongoose.model('Usuario', UserSchema);
export default UserModel;