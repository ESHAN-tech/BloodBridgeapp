
import multer from "multer"

const storage=multer.diskStorage(
    {

destination:'./public/employee',
filename:(req,file,cb)=>
{
    cb(null,file.originalname)//here null means no error,
}


    }
)
const upload_image=multer(

{
    storage:storage
}

).single("photo")//input type= file name="pic" same input type name pass
//kyonki employeemodel mein bhi photo naam diya hai
export default upload_image