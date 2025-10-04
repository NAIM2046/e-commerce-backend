import { Request, Response } from "express";
import productValidationSchema from "./product.validation";
import { ProductServices } from "./product.services";
import { Product } from './product.model';


const createProduct = async (req:Request , res :Response)=>{
   try{
    console.log(req.body) ;
    const zodParser = productValidationSchema.parse(req.body) ;
    const result = await ProductServices.createAProductIntoDB(zodParser)

    res.status(200).json({
        success: true,
        message: "Product created successfully",
        data: result
    })

   }catch(err:any){
      res.status(500).json({
        success: false,
        message: err.message ||  "Something went wrong",
        error: err
    })
   }
}
 const getsAllProducts =  async (req:Request , res:Response)=>{
    try {
        const {searchTerm} = req.query ;
        const result = await ProductServices.getProductFromDB( searchTerm as string)  ;
        res.status(200).json({
            success:true ,
            message:"Products retrieved successfully",
            data:result 
        })
        
    } catch (error) {
        res.status(500).json({
            success:false ,
            message:"Failed to retrieve products",
            error 
        })
        
    }
 }
 const getSingleProduct = async (req:Request , res:Response)=>{
    try {
        const {ProductId} = req.params ;
        const result = await ProductServices.getSingleProductFromDB(ProductId)  ;
        res.status(200).json({
            success:true ,
            message:"Product retrieved successfully",
            data:result
        })
        
    }
        catch (error) { 
        res.status(500).json({
            success:false ,
            message:"Failed to retrieve product",
            error 
        })
    }
    }
    const updateProduct = async (req:Request , res:Response)=>{
        try {
            const {ProductId} = req.params ;
            const updateData = req.body ;
            const result = await ProductServices.updateProductIntoDB(ProductId , updateData)  ;
            res.status(200).json({
                success:true ,
                message:"Product updated successfully",
                data:result
            })
        } catch (error) {
            res.status(500).json({
                success:false ,
                message:"Failed to update product",
                error
            })
        }
    }

const deleteProduct = async (req:Request , res:Response)=>{
    try {
        const {ProductId} = req.params ;
        const result = await ProductServices.deleteProductFromDB(ProductId)  ;
        res.status(200).json({
            success:true ,
            message:"Product deleted successfully",
            data:result
        })
    } catch (error) {
        res.status(500).json({
            success:false ,
            message:"Failed to delete product",
            error
        })
    }
}
export const ProductControllers ={
    createProduct,
    getsAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}