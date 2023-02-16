const express = require('express')
const apiRouter = express.Router();
const User = require("../models/user");


apiRouter.get('/users',async (req,res)=>{
   await User.find({},(err,result)=>{
       res.json(result);
   })
})




apiRouter.post('/users',async (req,res)=>{
    const {username} = req.body;
    
    const newUser = new User({username});
    
    await newUser.save((err,result)=>{
         if(!err){
            console.log(result);
             res.json(result)
         }else{
            console.log(err);
         }
    })
})



module.exports = apiRouter;