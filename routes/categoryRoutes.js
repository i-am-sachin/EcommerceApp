import express from 'express';
import { isAdmin, requirSignIn } from './../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

//routes
//create category
router.post('/create-category', requirSignIn, isAdmin, createCategoryController)

//update category
router.put('/update-category/:id', requirSignIn, isAdmin, updateCategoryController)

//getAll category
router.get('/get-category', categoryController)

//single category 
router.get('/single-category/:slug', singleCategoryController)

//delete category
router.delete('/delete-category/:id', requirSignIn,isAdmin, deleteCategoryController)

export default router