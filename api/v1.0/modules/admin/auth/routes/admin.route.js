import express from 'express'
import adminController from '../controllers/admin.controller.js'

const router=express.Router()

router.post("/signup",adminController.signup)
router.post("/admin-login",adminController.login)
router.get("/get/:id",adminController.getAdminById)

// router.post("/admin-login", adminController.adminLogin);

export default router  