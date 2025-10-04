import { Product } from "./product.model";
import { TProduct } from "./products.interface";

const createAProductIntoDB = async (productData : TProduct)=>{
    const  result = await Product.create(productData) ;
    return result ;
}
const getProductFromDB = async ( searchTerm  =""
)=>{
     const query =  searchTerm ? {name:{$regex :searchTerm , $options: 'i'}} : {} ;
     
    const result = await Product.find(query) ;
    return result ;
}
const getSingleProductFromDB = async (id : string)=>{
    const result = await Product.findById(id) ;
    return result ;
}
const updateProductIntoDB = async (id : string , updateData : Partial<TProduct>)=>{
    const result = await Product.findByIdAndUpdate(id , updateData , {new : true}) ;
    return result ;
}
const deleteProductFromDB = async (id : string)=>{
    const result = await Product.findByIdAndDelete(id) ;
    return result ;
}

export const ProductServices = {
    createAProductIntoDB,
    getProductFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB 
}