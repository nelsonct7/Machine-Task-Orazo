const jwt=require('jsonwebtoken')
const AdminModel = require('../models/adminModel')
const tockenValidator=async(req,res,next)=>{
  if(req.headers.tocken){
    try{
      const jwtTocken=JSON.parse(req.headers.tocken)
      const verified=jwt.verify(jwtTocken,process.env.JWT_KEY)
      const adminId=verified.id
      if(verified){
          await AdminModel.findOne({
              _id:adminId
          }).then((data)=>{
            next()
          }).catch((err)=>{
            res.status(401).send("Admin validation failed")
          })
      }else{
          res.status(401).json({
              message:'Tocken validation failed'
          })
      }
    }catch(err){
      res.status(500).send("Server Error")
    }
  }else{
    res.status(406).send("Request not Acceptable")
  }
    
    
  }

  module.exports = tockenValidator