const ManufacturingFormModel=require('../models/manufacturingFormModel');

const insertFormData=async(req,res)=>{
    try{
        const {first_name,second_name,mobile,email_id,requirements}=req.body
        await ManufacturingFormModel.create({
            first_name,
            second_name,
            mobile,
            email_id,
            requirements
        }).then((data)=>{
            res.status(201).send("Resource Created Success fully")
        }).catch((err)=>{
            res.status(503).send("Failed to Create Resource")
        })
    }catch(err){
        res.status(500).send("Server Error")
    }
}

module.exports={
    insertFormData,
}