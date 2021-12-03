import ModelAdvance from './ModelAdvance';

const resolverAdvance = {
    Query: {
        allAdvances: async (parent, args) => {
            const advances = await ModelAdvance.find().populate('Proyecto').populate('Estudiante');
            if (advances.length == 0) { console.log("No hay Registros en la base de datos"); }
            else { return advances; } 
        },
        getOneAdvance: async (parent, args) => {
            const query = { _id: args._id };
            const advance = await ModelAdvance.findById(query)
                .populate('Proyecto').populate('Estudiante');
            if (advance) { return advance; } 
            else { console.log("El ID " + args._id + " No Existe en DB"); }
        },
    },
    Mutation: {
        addAdvance: async (parent, args) => {
            const addAdvance = await ModelAdvance.create(args); 
            return addAdvance;
        },
        updateAdvance: async (parent, args) => {
            const query = { _id: args._id };
            const advance = await ModelAdvance.findById(query);
            if (advance) {
                const updateAdvance = await ModelAdvance.updateOne(query, args);
                if (updateAdvance) { return `Proyecto ID ${args._id} Ha sido actualizado`; }
                else { return `Proyecto ID ${args._id} No Encontrado`; }
            }
        },
    },
}

export { resolverAdvance };