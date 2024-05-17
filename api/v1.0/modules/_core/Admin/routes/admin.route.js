import express from 'express'
import adminController from '../controllers/admin.controller.js'

const router=express.Router()

router.post("/signup",adminController.signup)
router.post("/login",adminController.login)
router.get("/get/:id",adminController.getAdminById)

export default router  