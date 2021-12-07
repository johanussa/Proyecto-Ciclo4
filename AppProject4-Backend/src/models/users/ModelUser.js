import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Email: { type: String, required: true, unique: true, 
        validate: {
            validator: (Email) => {
                const expreRegular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
                return expreRegular.test(Email);
            },
            message: "Email is not valid",
        },
    },
    Password: { type: String, required: true },
    Rol: { type: String, required: true, enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"] },         
    Estado: { type: String, default: "PENDIENTE",
        enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"], }
});

const UserModel = mongoose.model('Usuario', UserSchema);
export default UserModel;