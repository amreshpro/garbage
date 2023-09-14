import express from 'express'
import UserController from '../controller/UserController.js';

const router = express.Router();


router.post("/user/signup",UserController.SignupController)
router.post("/user/login",UserController.LoginController)
router.get("/user",UserController.AllUserData)
router.get("/user/test",UserController.test)


export default router