const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false
        });
        
        console.log('BASE DE DATOS ONLINE');
        
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de iniciar la BASE DE DATOS')
    }

}

module.exports = {
    dbConnection
}