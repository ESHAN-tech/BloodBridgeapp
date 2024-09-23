import express from 'express'

import { viewContact, Login, addStuAccount, viewFeedback, viewStudent, addStudentAccount, deleteContact,editContact, getContact,deleteStudent, deleteFeedback ,addemployee,viewEmployee} from '../controller/admin_controller.js'
import upload_image from"../middleware/employee.multer.middleware.js"
const adminRoutes = express.Router()

adminRoutes.post("/login", Login)
// adminRoutes.post("/addStudent", addStuAccount)
adminRoutes.get("/showContact", viewContact)
adminRoutes.get("/showFeedback", viewFeedback)
adminRoutes.get("/showStudent", viewStudent)

adminRoutes.post("/addStuAccounts", addStudentAccount)

adminRoutes.put("/editContact/:id", editContact)

adminRoutes.post("/getContact/:id", getContact)
adminRoutes.delete("/deleteStudent/:id", deleteStudent)
adminRoutes.post("/deleteFeedback/:id", deleteFeedback)

// ab aise middleware ko jodte hain 
adminRoutes.post("/addemployee",upload_image, addemployee)
adminRoutes.get("/viewemployee", viewEmployee)






export default adminRoutes