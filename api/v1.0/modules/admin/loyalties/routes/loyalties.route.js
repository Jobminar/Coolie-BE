import express from 'express'
import LoyaltyController from '../controller/loyalties.controller.js'

const router=express.Router()

router.post("/",LoyaltyController.createLoyalty)

export default router