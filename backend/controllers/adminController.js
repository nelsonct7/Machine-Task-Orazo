const generateTocken = require('../utils/generateTocken');
const AdminModel=require('../models/adminModel');
const ManufacturingFormModel=require('../models/manufacturingFormModel');
const jwt=require('jsonwebtoken')

const registerAdmin = async (req, res) => {
    const {
        adminEmail,
        adminPassword,
    } = req.body
    try{
        const adminExist = await AdminModel.findOne({
            adminEmail
        });
        if (adminExist) {
            res.status(400).send("Email already exist")
        } else {
            await AdminModel.create({
                adminEmail,
                adminPassword,
            }).then((data)=>{
                adminTocken=generateTocken(data._id)
                res.cookie('adminTocken',adminTocken,{ maxAge: 9000000, httpOnly: false})
                res.status(201).json({
                    _id: data._id,
                    adminEmail,
                    adminPassword,
                })
            }).catch((err)=>{
                res.status(503).send("Resource not created")
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error")
    }
}

const authAdmin =async (req, res) => {
    const {
        adminEmail,
        adminPassword,
    } = req.body;
    try{
        const admin = await AdminModel.findOne({
            adminEmail
        });
        if (admin && (await admin.matchPassword(adminPassword))) {
            console.log(admin);
            const{adminPassword,...sendingData}=admin._doc
            adminTocken=generateTocken(admin._id)
            res.status(200).cookie('adminTocken',adminTocken,{ maxAge: 9000000, httpOnly: false}).json({...sendingData,adminTocken})
            } else {
            res.status(401).send("Authentication failed")
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error")
    }
}

const getRequirements=async(req,res)=>{
    try{
        await ManufacturingFormModel.find({}).then((data)=>{
            res.status(200).json({data})
        }).catch((error)=>{
            res.status(404).json({msg:"No Data Found"})
        });
        
    }catch(err){
        console.log(err);
        res.status(500).send("Server Error")
    }
}
const validateTocken=async(req,res)=>{
    try{
        const jwtTocken=JSON.parse(req.headers.tocken)
        const verified=jwt.verify(jwtTocken,process.env.JWT_KEY)
        const adminId=verified.id
        if(verified){
            await AdminModel.findOne({
                _id:adminId
            }).then((data)=>{
                const{adminPassword,...sendingData}=data._doc
              res.status(200).json({...sendingData})
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
}
module.exports={
    registerAdmin,
    authAdmin,
    getRequirements,
    validateTocken
}