const { Router } = require("express")
const controller = require("../controllers/defaultController");

const routers = Router()

routers.get("/",controller.viewIndex)
routers.get("/login",controller.viewLogin)
routers.get("/register",controller.viewRegister)

routers.post("/register-user",controller.registerUser)
routers.post("/login-user",controller.loginUser)


module.exports = routers