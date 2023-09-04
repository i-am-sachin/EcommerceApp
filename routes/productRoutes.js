import  express  from "express";
import { 
    brainTreePaymentController,
    brainTreeTokenController,
    createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController, 
    productCategoryController, 
    productCountController, 
    productFiltersController, 
    productListController, 
    productPhotoController, 
    relatedProductController, 
    searchProductController, 
    updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requirSignIn } from './../middlewares/authMiddleware.js';
import formidable from "express-formidable";


const router = express.Router()

//routes
router.post("/create-product", requirSignIn, isAdmin,formidable(), createProductController)

//routes
router.put("/update-product/:pid", requirSignIn, isAdmin,formidable(), updateProductController)


//get all products
router.get('/get-product', getProductController);

// get single products
router.get('/get-product/:slug', getSingleProductController);

//get photo 
router.get('/product-photo/:pid', productPhotoController);

//delete product
router.delete('/delete-product/:pid', deleteProductController);

//filter product
router.post('/product-filters', productFiltersController);

//product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

//search product
router.get('/search/:keyword', searchProductController);

//similar product
router.get('/related-product/:pid/:cid' ,relatedProductController);

//category wise product
router.get('/product-category/:slug', productCategoryController);

//payments routes
//token
router.get('/braintree/token', brainTreeTokenController)

//payments
router.post('/braintree/payment', requirSignIn, brainTreePaymentController)


export default router;