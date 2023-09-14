import UserController from '../controller/UserController.js'
import express from 'express'

// express router
const UserRouter = express.Router()


UserRouter.post("/register",UserController.UserRegistration)
UserRouter.post("/login",UserController.UserLogin)
UserRouter.post("/alluser",UserController.getAllUser)




export default UserRouter