const mongoose=require('mongoose');

const manufacturingFormSchema=mongoose.Schema(
    {
        first_name:{
            type:String,
            required:true
        },
        second_name:{
            type:String,
            required:true
        },
        mobile:{
            type:String,
            required:true
        },
        email_id:{
            type:String,
            required:true
        },
        requirements:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)
const ManufacturingFormModel=mongoose.model('ManufacturingFormModel',manufacturingFormSchema);

module.exports=ManufacturingFormModel 