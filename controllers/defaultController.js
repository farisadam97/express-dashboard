const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../models/user.model")
const User = require("../models/user.model")

const { APP_SECRET } = process.env

let jwtUser =''

const createToken = (id) => {
    return jwt.sign({id},APP_SECRET, { expiresIn: "1 days" })
}

function checkToken (){
    if(jwtUser!==''){

    } else {
        return false
    }
}

const registerUser = async (req,res,next) => {
    try {
        const { body } = req
        console.log(body._email,body._password)
    } catch (error) {
        console.log(error)
    }

}

const loginUser =  async (req,res,next) => {
    try {
        const { body } = req
        const email = body._email
        const password = body._password
        console.log(body._email,body._password)

        const userExist  = await User.findOne({
            where : {
                email,
            },
        })

        if(!userExist){
            throw {
                message : "Email not found ",
                code : "404",
                error : "bad request"
            }
        }

        const matchPassword = (password === userExist.password) ? "True" : "False"

        jwtUser = await createToken(userExist.id)
        console.log(jwtUser)

        return res.status(301).redirect('/')

        
    } catch (error) {
        
    }
}

const viewIndex = (req,res) => {
    checkToken()
    return res.render("index")
}

const viewLogin = (req,res) => {
    return res.render("login")
}

const viewRegister = (req,res) => {
    return res.render("register")
}



module.exports = { viewIndex,viewLogin,viewRegister,registerUser,loginUser }