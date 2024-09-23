import mongoose from "mongoose";
const stuSchema = new mongoose.Schema(
    {
        stuId: { type: String, required: true, unique: true },
        stuPass: { type: String, required: true, unique: true },
        stuName: { type: String, required: true, unique: true },
        stuEmail: { type: String, required: true, unique: true },

    }
)
const stuModel = mongoose.model("StudenModel", stuSchema)
export default stuModel