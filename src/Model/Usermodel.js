const mongosose = require('mongoose');

const userSchema = new mongosose.Schema({   
    name: {
        type: String,
        required: true,
        trim : true
    },
    email: {    
        type: String,
        required: true,
        trim : true
    },
    password: {
        type: String,   
        required: true,
        trim : true
    }
}, { timestamps: true })

module.exports = mongosose.model('User', userSchema)