import mongoose from "mongoose";
const stuAccountShema = new mongoose.Schema(
    {
        stuId: { type: String, required: true, unique: true },
        stuPass: { type: String, required: true, unique: true },
        stuName: { type: String, required: true },
        stuEmail: { type: String, required: true, unique: true },
        stuCourse: { type: String, required: true },

    }
)
const stuAccountModel = mongoose.model("studentAccount", stuAccountShema)
export default stuAccountModel