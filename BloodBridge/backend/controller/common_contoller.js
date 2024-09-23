import { request, response } from 'express'
import { data } from '../db_quotes.js'
import { student_data } from '../student.js'
import { teacher } from '../teacher.js'
import contactModel from '../models/contact.model.js'
import feedbackModel from '../models/feedback.model.js'
//in this file define only function
export const aboutUs = (request, response) => {
    response.send("<h1>This is return by controller</h1>")
}
export const contactUs = (request, response) => {
    response.send("<h1>This is contact us page return by controller</h1>")
}
export const feedback = (request, response) => {
    response.send("<h1>This is feedback page return by controller</h1>")
}
export const viewQuotes = (req, res) => {
    res.send(data)
}
export const allStudents = (req, res) => {
    res.send(student_data)
}
export const allTeacher = (req, res) => {
    res.send(teacher)
}
export const addContact = async (req, res) => {
    const contact = req.body
    const { userName, userEmail, userPhone, userQuery } = contact
    try {
        const contactDoc = contactModel(
            {
                userName: userName,  //left schema (coloum name) variable right to store in database
                userEmail: userEmail,
                userPhone: userPhone,
                userQuery: userQuery,
            }
        )
        await contactDoc.save()
    } catch (error) {
        console.log(error);
    }
    res.send("Data is received")
}
export const addFeedback = async (request, response) => {
    const feedBack = request.body
    const { userName, userEmail, userRating, userRemark } = feedBack
    try {
        const feedbackDoc = feedbackModel(
            {
                userName: userName,
                userEmail: userEmail,
                userRating: userRating,
                userRemark: userRemark,
            }
        )
        await feedbackDoc.save()

    } catch (error) {
        console.log(error);

    }
    response.send(":::: Data is Recevied ::::")
}
