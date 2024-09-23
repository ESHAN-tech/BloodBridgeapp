import { request, response } from "express"
import adminModel from "../models/admin.model.js"
import contactModel from '../models/contact.model.js'
import feedbackModel from "../models/feedback.model.js"
import stuModel from "../models/student.model.js"
import stuAccountModel from "../models/studentAcc.model.js"
import employeeModel from "../models/employeemodel.js"






export const viewContact = async (req, res) => {

    try {
        const contacts = await contactModel.find()//it like a select*from contact

        if (contacts != null) {
            console.log("All contacts are :- " + contacts);
            res.send(contacts)// send back react code (UI) it fullfill api request
        }
        else {
            res.send({ code: 404, message: "No Data found" })
        }

    } catch (error) {
        console.log(error);

    }
}

//admin view feedback
export const viewFeedback = async (request, response) => {
    try {
        const feedback = await feedbackModel.find()
        if (feedback != null) {
            console.log("All Feedbacks are :" + feedback);
            response.send(feedback)

        }
        else {
            console.log({ code: 404, message: "No data is found" });
        }

    } catch (error) {
        console.log(error);
    }
}

//View all Students code which is present in database
export const viewStudent = async (request, response) => {
    try {
        const student = await stuAccountModel.find()
        if (student != null) {
            console.log("All Student are : " + student);
            response.send(student)
        } else {
            console.log({ code: 404, message: "No data is found" });

        }
    } catch (error) {
        console.log(error);

    }
}

export const Login = async (req, res) => {
    const userLogin = req.body
    const { userId, pass } = userLogin
    try {
        const admin_data = await adminModel.findOne({ adminId: userId }) //its like select query
        if (admin_data != null) {
            if (admin_data.password == pass) {
                res.send({ code: 200, message: "login successfully", token: admin_data.adminId })
            }
            else {
                res.send({ code: 404, message: "invalid password" })
            }

        }
        else {
            res.send("email not found.")
        }

    } catch (error) {
        console.log(error);


    }

    console.log(`user Id is : ${userId}`);
    console.log(`user pass is : ${pass}`);

    // res.send(":::: Data is Recevied ::::")


}

//addstudent page code Admin start
export const addStuAccount = async (request, response) => {
    const stuAccount = request.body
    const { stuId, stuPass, stuName, stuEmail } = stuAccount

    try {

        const addStuDoc = stuModel(
            {
                stuId: stuId,
                stuPass: stuPass,
                stuName: stuName,
                stuEmail: stuEmail,



            }
        )
        await addStuDoc.save()


    } catch (error) {
        console.log(error);

    }
    console.log("data is received ");

}
//addstudent page code Admin end

export const addStudentAccount = async (request, response) => {
    const stuAccountDetails = request.body
    const { stuId, stuPass, stuName, stuEmail, stuCourse } = stuAccountDetails
    try {
        const studentAccDoc = stuAccountModel(
            {
                stuId: stuId,
                stuPass: stuPass,
                stuName: stuName,
                stuEmail: stuEmail,
                stuCourse: stuCourse,
            }
        )
        await studentAccDoc.save()

    } catch (error) {
        console.log(error);

    }
    console.log("Data is received from aadAccountStudent");


}

// delete contact code

export const deleteContact = async (request, response) => {
    try {
        const id = request.params.id
        console.log(`delete id : ${id}`);

        const isdelete = await contactModel.deleteOne(
            {
                _id: id
            }
        )

        if (isdelete != null) {
            response.send({ code: 200 })
        }

    } catch (error) {
        console.log(error);

    }
}


export const getContact=async(req,res)=>{

    const id = req.params.id
    try {
        console.log(id);
        
        const data = await contactModel.findOne({_id:id})
        if(data!=null)
            res.send(data)



    } catch (error) {
        console.log(error);
        
    }

}

export const editContact=async(req,res)=>{
    try {
        
        const user_data = req.body
        const {id,userName,userEmail,userPhone,userQuery}=user_data
        console.log(id+userName+userEmail+userPhone+userQuery);
        
        const updateDoc={
$set:{
    userName:userName,
    userEmail:userEmail,
    userPhone:userPhone,
    userQuery:userQuery
} 
        };
        const filter={_id:id}
const status = await contactModel.updateOne(filter,updateDoc)
console.log(status);
res.send(status)
    } 

    catch(err)
    {
        console.log(err);

    }


}
//delete student code 
export const deleteStudent = async (request, response) => {
    try {
        const id = request.params.id

        const isdelete = await stuAccountModel.deleteOne(
            {
                _id: id
            }
        )
        if (isdelete != null) {
            response.send({ code: 200 })
        }

    } catch (error) {
        console.log(error);

    }
}

//delete feedback code 
export const deleteFeedback = async (request, response) => {
    try {
        const id = request.params.id

        const isdelete = await feedbackModel.deleteOne(
            {
                _id: id
            }
        )
        if (isdelete != null) {
            response.send({ code: 200 })
        }

    } catch (error) {
        console.log(error);

    }
}

export const addemployee=async(req,res)=>
    {
        const employeeobject=req.body
        console.log(employeeobject);
       const picname = req.file.filename//is se pic ka naam milega, jo table mein store hona hai 
    //req ek objct hai , file uski property hai, aur uska attribute filename hai  
    //    console.log(picname);
    //    console.log(req.file);
    
        const data=req.body
      ///  console.log(req.body);
        const{name,email,phone}=data //object destructure
    
        try{
    const employeedoc=new employeeModel(
    {
        name:name,email:email,phone:phone,emppic:picname
        
    }
    
    )
    await employeedoc.save()
    res.send("Employeedetail added successfully")
    
        }
        catch(err)
        {
    console.log(err.message);
        }
    
    }
    
    
    export const viewEmployee=async(req,res)=>
        {
        
        try{
        
        
           const employeeObj=    await  employeeModel.find()
        
           if(employeeObj!=null)
        
            res.send(employeeObj)
        }
        catch(error)
        {
        {error.message}
        }
            
        }     