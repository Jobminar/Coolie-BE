import express from 'express'
import userController from '../../../users/auth/controllers/user.controller.js'


const router=express.Router()

router.post("/",userController.signup)
router.post("/",userController.login)

export default router