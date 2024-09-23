import mongoose from "mongoose";
const adminSchema = new mongoose.Schema
    (
        {
            adminId: { type: String, required: true, unique: true },
            password: { type: String, required: true, unique: true },
        }
    )
const adminModel = mongoose.model("admins", adminSchema);
export default adminModel