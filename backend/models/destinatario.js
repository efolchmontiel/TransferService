const mongoose = require('mongoose');
const { Schema } = mongoose;

const AddresseeSchema = new Schema({
    name: {type:String, required:true},
    rut: {type:String, required:true},
    email: {type:String, required:false},
    phone: {type:Number, required:false},
    bank: {type:String, required:true},
    typeAccount : {type:String, required:true},
    numberAccount: {type:Number, required:true},
    monto: {type:Number, required:true},

});

module.exports = mongoose.model('Addressee', AddresseeSchema);