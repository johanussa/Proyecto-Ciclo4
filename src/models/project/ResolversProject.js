import ProjectModel from "./ModelProject";

const resolversProject = {
    Query: {
        allProjects: async (parent, args) => {
            if (args._id) {
                const projects = await ProjectModel.find({ Lider: args._id })
                    .populate('Lider').populate('Avances').populate('Inscripciones');
                if (projects.length == 0) { console.log("No hay Registros en la base de datos"); }
                else { return projects; } 
            } else {
                const projects = await ProjectModel.find()
                    .populate('Lider').populate('Avances').populate('Inscripciones');
                if (projects.length == 0) { console.log("No hay Registros en la base de datos"); }
                else { return projects; } 
            }            
        }, 
        getOneProject: async (parent, args) => {
            const query = { _id: args._id };
            const project = await ProjectModel.findById(query).populate('Lider');
            if (project) { return project; } 
            else { console.log("El ID " + args._id + " No Existe en DB"); }
        },
    }, 
    Mutation: {
        addProject: async (parent, args) => {
            const query = { Nombre: args.Nombre };
            const projectDB = await ProjectModel.find(query);    
            if (projectDB.length == 0) {                    
                const projectCreado = await ProjectModel.create(args); 
                return projectCreado;
            } else { console.log(`${args.Nombre} ya estaba registrado !!`); }                          
        }, 
        deleteProject: async (parent, args) => {
            const query = { _id: args._id };
            const project = await ProjectModel.findOneAndDelete(query); 
            if (project) { return `ID ${ args._id } Eliminado !!`; }
            else { return `ID ${ args._id } No esta registrado en la DB !!`; }             
        },
        updateProject: async (parent, args) => {
            try {
                const query = { _id: args._id };                 
                const project = await ProjectModel.findOne(query);
                if (project) {
                    const projectUpdate = await ProjectModel.updateOne(query, args);
                    if (projectUpdate) { return `Proyecto ID ${args._id} Ha sido actualizado`; }
                }                               
            } catch (e) { return `El ID ${ args._id } No se encuentra Registrado`; }            
        },        
    },
};

export { resolversProject };