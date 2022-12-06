import mongoose from "mongoose";

//defining schema

const studentSchema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    age: { type: Number, require: true, min: 18, max: 60 },
    fees: { type: mongoose.Decimal128, require: true, validate: (value) => value >= 5000 }
})

// model
const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel