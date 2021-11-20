import UserModel from "./ModelUser";

const resolversUser = {
    Query: {
        allUsuarios: async (parent, args) => {
            const users = await UserModel.find();
            if (users.length == 0) { console.log("No hay Registros en la base de datos"); }
            else { return users; } 
        }, 
        getOneUser: async (parent, args) => {
            const query = { Identificacion: args.Identificacion };
            const user = await UserModel.findOne(query);
            if (user) { return user; } 
            else { console.log(`EL ID ${ args.Identificacion } NO Existe`); }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const query = { Identificacion: args.Identificacion };
            const userDB = await UserModel.find(query);    
            if (userDB.length == 0) {                    
                const userAdd = await UserModel.create(args); 
                return userAdd;
            } else { console.log(`EL Usuario ${ args.Identificacion } ya estaba registrado !!`); }                          
        }, 
        deleteUser: async (parent, args) => {
            const query = { Identificacion: args.Identificacion };
            const user = await UserModel.findOneAndDelete(query); 
            if (user) { return ` El ID ${ args.Identificacion } fue Eliminado !!`; }
            else { return `El ID ${ args.Identificacion } No esta registrado en la DB !!`; }             
        },
        updateUser: async (parent, args) => {            
            const query = { Identificacion: args.Identificacion };
            const user = await UserModel.findOne(query);
            if (user) {
                const userUpdate = await UserModel.updateOne(query, args);                    
                if (userUpdate) { return `El Usuario con ID ${ args.Identificacion } Ha sido actualizado!!`; }
            } else { return `El ID ${ args.Identificacion } No se encuentra Registrado!!`; }                    
        },
    }
}

export { resolversUser };