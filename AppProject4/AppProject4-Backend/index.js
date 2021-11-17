import mongoose from 'mongoose';
import app from './app';
import DataBase from './src/database/DataBase';

mongoose.connect(DataBase.db, {     
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
    .then( () => console.log("La Base de datos se ha Conectado Correctamente"))    
    .catch(error => console.log("Error de Conexion ", error));

app.listen(DataBase.port, () => {
    console.log(`Api Rest corriendo en el puerto #${ DataBase.port }`);
});