import express from 'express'
import LoyaltyController from '../controller/loyalti.card.js'

const router=express.Router()

router.post("/",LoyaltyController.createLoyalty)

export default router