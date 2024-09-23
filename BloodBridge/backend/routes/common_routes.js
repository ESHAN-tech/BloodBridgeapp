import express from 'express';
import { aboutUs, contactUs, feedback, viewQuotes, allStudents, allTeacher, addContact, addFeedback } from "../controller/common_contoller.js";

const routes = express.Router()//it will return routes to make to various to path(endpoint/routes)

routes.get("/about", aboutUs)
routes.get("/contact", contactUs)
routes.get("/feedback", feedback)
routes.get("/quotes", viewQuotes)
routes.get("/allStudents", allStudents)
routes.get("/allTeacher", allTeacher)
routes.post("/addContact", addContact)
routes.post("/addFeedback", addFeedback)


export default routes