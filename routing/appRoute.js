/**
 * Created by vipin on 05/08/18.
 */
let express = require('express');
let router = express.Router();

let authentication = require('../authentication/authRouter');

/*
*  Authentication covered [Login, Registration, Forgot/Change Password]
* */
router.use("/authentication", authentication);



module.exports = router;