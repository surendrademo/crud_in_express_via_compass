import StudentModel from "../models/student.js"

class studentController {
    static createDoc = async (req, res) => {
        const { name, age, fees } = req.body
        try {
            const doc = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            const result = await doc.save()
            res.redirect("/student")
        }
        catch (err) {
            console.log(err)
        }
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.render("index", { data: result })
        } catch (err) {
            console.log(err)
        }
    }
    static editDoc = async (req, res) => {
        console.log(req.params.id)
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render('edit', { data: result })
        } catch (err) {
            console.log(err)
        }
    }
    static updateDocById = async (req, res) => {
        try {
            console.log(req.params.id)
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect("/student")
        } catch (err) {
            console.log(err)
        }
    }
    static deleteDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (err) {
            console.log(err)
        }
    }
}
export default studentController