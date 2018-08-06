/**
 * Created by vipin on 05/08/18.
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {firstName:String,lastName:String},
    mobile: String,
    email:String,
    role: String,
    password: String,
}, {collection:'users', timestamps:true });

mongoose.model('USER_MODEL', userSchema);