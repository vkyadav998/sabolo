/**
 * Created by vipin on 05/08/18.
 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');




let login = require('../authentication/login')


/*
 *  Login covered [Login, Registration, Forgot/Change Password]
 * */
router.use("/login", login);


// require('../schema/users');
// let  USER = mongoose.model('USER_MODEL');
//
// router.get('/getall_user', function(req, res)  {
//     USER.find({}, function (err, data){
//         if(err){
//             console.log(err);
//         }else{
//             if(data.length > 0){
//                 res.json({"success" : true, dataList : data});
//             }else{
//                 res.json({"success" : true, dataList : []});
//             }
//         }
//     });
// });
//
// router.post('/add_user', function(req, res){
//     let user =req.body;
//     let new_user = new USER(user);
//     new_user.save(function(err, data) {
//         if (err) {return console.error(err)};
//         res.json(data);
//     });
// });

// router.post('/update_user', function(req, res)  {
//     let check =req.body;
//     USER.findByIdAndUpdate(check._id, check,function(err, docs){
//         if(err){
//             console.log("Something wrong when updating data!");
//         }
//         res.json(docs);
//     });
// });
//
// router.post('/remove_user', function(req, res)  {
//     let check =req.body;
//     USER.remove({"_id":check._id}, function(err, docs){
//         if(err){
//             console.log(err);
//         }
//         res.json(docs);
//     });
// });

module.exports = router;