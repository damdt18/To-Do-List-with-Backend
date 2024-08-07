const mongoose = require('mongoose')

const ConectionMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {})
        console.log('Connection succesfullly')
         
    } catch (e) {
        console.log('Connection Error ', e)
        throw new Error('Error')
    }
}

module.exports = { ConectionMongo }