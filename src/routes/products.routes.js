import {Router} from 'express'
import * as productController from './../controllers/products.controller'
import {authJWT} from './../middlewares'
const router = Router()



router.post('/',[authJWT.verifyToken, authJWT.isModerator],productController.createProduct)
router.get('/',productController.getProducts)
router.get('/:productId',productController.getProductById)
router.put('/:productId',[authJWT.verifyToken, authJWT.isAdmin],productController.updateProjectById)
router.delete('/:productId',[authJWT.verifyToken, authJWT.isAdmin],productController.deleteProductById)

export default router;