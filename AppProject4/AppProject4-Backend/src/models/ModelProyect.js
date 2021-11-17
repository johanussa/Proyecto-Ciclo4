import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProjectSchema = new Schema( {
    
    Nombre: { type: String, required: true },
    Ob_Generales: { type: String, required: false },
    ob_Especificos: { type: String, required: false },
    Presupuesto: { type: String, required: true },
    Fecha_Inicio: { type: String, required: true },
    Fecha_Terminacion: { type: String, required: false },
    Id_Lider: { type: String, required: true },
    Nom_Lider: { type: String, required: true },
    Estado: { type: String, required: true },
    Fase: { type: String, required: false },
    Est_Inscritos: [{
        Id_Estud: { type: String, required: true },
        Nom_Estud: { type: String, required: true },
        Email: { type: String, required: false },
        Estado_Estud: { type: String, required: true }
    }]
});

export default mongoose.model('Proyectos', ProjectSchema);