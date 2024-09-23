import mongoose from "mongoose"
const DbURL = 'mongodb+srv://aaanand1897:AUIancnJOU3QMGMD@cluster0.ryvx3.mongodb.net/collegeApp'
const connect_Db = async () =>{
    try {
        const conn = await mongoose.connect(`${DbURL}`)
        console.log("Connection Safal hua");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connect_Db
