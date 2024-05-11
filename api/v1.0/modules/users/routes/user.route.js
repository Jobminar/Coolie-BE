import express from 'express'
import userController from '../controller/user.controller.js'


const router=express.Router()

router.post("/",userController.signup)
router.post("/",userController.login)

export default router