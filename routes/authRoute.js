import express from "express";
import {
    registerController,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
} from '../controllers/authController.js'
import { isAdmin, requirSignIn } from "../middlewares/authMiddleware.js";

// router Object
const router = express.Router()

//routing

//REJISTER METHOD || POST
router.post('/register', registerController)


//LOGIN ||POST
router.post('/login', loginController);

//forgot password || POST
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test', requirSignIn, isAdmin, testController);

//protected User route auth
router.get('/user-auth', requirSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})

//protected Admin route auth
router.get('/admin-auth', requirSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})

//update profile
router.put('/profile', requirSignIn, updateProfileController);

//orders
router.get('/orders', requirSignIn, getOrdersController);

//all orders
router.get('/all-orders', requirSignIn, isAdmin, getAllOrdersController);

//order status updata
router.put('/order-status/:orderId', requirSignIn, isAdmin, orderStatusController);


export default router
