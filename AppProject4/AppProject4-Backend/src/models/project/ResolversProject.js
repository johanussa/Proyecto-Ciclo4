import ProjectModel from "./ModelProyect";

const resolversProject = {
    Query: {
        allProyectos: async (parent, args) => {
            const projects = await ProjectModel.find();
            if (projects.length === 0) { return "No hay Registros en la base de datos"; }
            else { return projects; } 
        }, 
    }, 
    Mutation: {
        addProject: async (parent, args) => {
            const query = { Nombre: args.Nombre };
            const projectDB = await ProjectModel.find(query);    
            if (projectDB.length == 0) {                    
                const projectCreado = await ProjectModel.create({
                    Nombre: args.Nombre,
                    Ob_Generales: args.Ob_Generales,
                    Ob_Especificos: args.Ob_Especificos,
                    Presupuesto: args.Presupuesto,
                    Id_Lider: args.Id_Lider,
                    Nom_Lider: args.Nom_Lider,                           
                }); return projectCreado;
            } else { console.log(`${args.Nombre} ya esta registrado!`); }                          
        }, 
        deleteProject: async (parent, args) => {
            const query = { _id: args._id };
            let res = 9;
            ProjectModel.findOneAndDelete(query, (err, project) => {
                if (project) { 
                    console.log(`ID ${ args._id } eliminado !!`);
                    res = 1; }
                else { 
                    console.log(`ID ${ args._id } No encontrado !!`);
                    res = 0; }
            }); 
            return res;
        },
    },
};

export { resolversProject };