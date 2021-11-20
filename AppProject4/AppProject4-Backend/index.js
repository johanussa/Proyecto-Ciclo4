import { ApolloServer } from 'apollo-server-express';
import { typesDefs } from './src/graphQL/TypeDefs';
import { resolvers } from './src/graphQL/Resolvers';
import DataBase from './src/database/DataBase';
import mongoose from 'mongoose';
import app from './app';

mongoose.connect(DataBase.db, {     
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
    .then( () => console.log("La Base de datos se ha Conectado Correctamente"))    
    .catch(error => console.log("Error de Conexion ", error));

const server = new ApolloServer({
    typeDefs: typesDefs,
    resolvers: resolvers
}); 

app.listen(DataBase.port, async () => {
    await server.start();
    server.applyMiddleware({ app });
    console.log(`Api GraphQL on Port #${ DataBase.port }`);
});