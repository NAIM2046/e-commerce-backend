import express from "express" ;
import { ProductControllers } from "./product.controller";
const router = express.Router() ;
router.post("/" , ProductControllers.createProduct )
router.get("/" , ProductControllers.getsAllProducts) ;
router.get("/:ProductId" , ProductControllers.getSingleProduct) ;
router.put("/:ProductId" , ProductControllers.updateProduct) ;
router.delete("/:ProductId" , ProductControllers.deleteProduct) ;

export const ProductRoutes = router ;