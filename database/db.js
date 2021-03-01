const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb://localhost:27017/online_class`, { 
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex: true,
} ,(err,db)=>{
    if (!err) {
        console.log('Db connected')
    }
    else {
        console.log('Failed'+ err)
    }
}); 

module.exports = mongoose;