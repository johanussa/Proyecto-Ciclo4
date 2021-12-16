import InscriptionModel from './ModelInscriptions';

const resolverInscription = {
    Query: {
        allInscriptions: async (parent, args) => {
            if (args.Estado) {
                const inscriptions = await InscriptionModel.find({ Estado: args.Estado })
                    .populate('Proyecto').populate('Estudiante');
                if (inscriptions.length == 0) { console.log("No hay Estudiantes con ese Estado"); }
                else { return inscriptions; } 
            } else {
                const inscriptions = await InscriptionModel.find()
                .populate('Proyecto').populate('Estudiante');
                if (inscriptions.length == 0) { console.log("No hay Registros en la base de datos"); }
                else { return inscriptions; } 
            }               
        },
        filterInscription: async (parent, args) => {
            const query = { Proyecto: args._id };
            const inscription = await InscriptionModel.find(query)
                .populate('Proyecto').populate('Estudiante');
            if (inscription) { return inscription; } 
            else { console.log("El ID " + args._id + " No Existe en DB"); }
        },
    },
    Mutation: {
        addInscription: async (parent, args) => {
            const addInscript = await InscriptionModel.create(args); 
            return addInscript;
        },
        deleteInscription: async (parent, args) => {
            const query = { _id: args._id };
            const deleteInscript = await InscriptionModel.findOneAndDelete(query);
            if (deleteInscript) { return `ID ${ args._id } Eliminado !!`; }
            else { return `ID ${ args._id } No esta registrado en la DB !!`; } 
        },
        updateInscription: async (parent, args) => {
            let newArgs = {};
            const query = { _id: args._id };            
            if (args.Estado == "ACEPTADO") {
                newArgs = { Estado: 'ACEPTADO', Fecha_Ingreso: Date.now() }
            } else { newArgs = { Estado: 'RECHAZADO', Fecha_Egreso: Date.now() } }
            const inscription = await InscriptionModel.findOne(query);
            if (inscription) {
                const updateInscript = await InscriptionModel.updateOne(query, newArgs);
                if (updateInscript) { return `Proyecto ID ${args._id} Ha sido actualizado`; }
            }            
        },
    },
}

export { resolverInscription };