import mongoose from "mongoose"
const employeeSchema=new mongoose.Schema({


name:{type:String,required:true},
email:{type:String,required:true},
phone:{type:String,required:true},
 emppic:{type:String,},


})

const employeeModel=mongoose.model("Employee",employeeSchema)
export default employeeModel