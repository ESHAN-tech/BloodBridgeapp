import express, { request, response } from "express"
import routes from "./routes/common_routes.js"
import adminRoutes from "./routes/admin_routes.js"
import cors from "cors"
import connect_Db from "./DataBase/DB.js"


const serverApp = express()

connect_Db()

const PORT = 1414
serverApp.listen(PORT, () => {
    console.log(`server is listing on http://localhost:${PORT}`);

})
serverApp.use(express.static("public"))//isse jo bhi static content hai vo public mein jaayega jaise images etc 
serverApp.use(cors())// its a middlware beeteen
serverApp.use(express.json()) // use when data is get from UI to backend
serverApp.use("/collegeApi", routes)//if your wise to collegeApi name then you can it just before routes
serverApp.use("/collegeAdmin", adminRoutes)




serverApp.get("/contact", (request, response) => {
    response.send("<h1>this is contact us Response</h1>")
})
serverApp.get("/", (request, response) => {
    response.send("<h1>this is Home Page</h1>")
})

const user = [
    {
        name: "vaibhav",
        emal: "vaibhav@gmail.com"
    },
    {
        name: "Aman",
        emal: "Aman@gmail.com"
    },
    {
        name: "Prakhar",
        emal: "Prakher@gmail.com"
    },
    {
        name: "Akash",
        emal: "Akash@gmail.com"
    }
]
serverApp.get("/user_details", (request, response) => {
    response.send(user)
})

