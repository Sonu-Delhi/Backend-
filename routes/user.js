const UserControllers=require('../controlers/userc')
const express=require('express')
const router=express.Router();
const {checkAuthentication,cheskAdmin} = require('../middleware/Auth')
router.post('/create',UserControllers.createUser);
router.delete('/delete/:id',UserControllers.deleteUser);
router.get('/get',UserControllers.getAllUser);
router.put('/update/:id',UserControllers.userUpdate);
router.post('/login',UserControllers.login);
module.exports=router;

// localhost:5000/user/create/