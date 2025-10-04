export type TProduct = {
    name: string;
    description: string;
    category:string;
    price:number ;
    tags:string[] ;
    variants:TVariant[];
    inventory:TInventory
}

export type TVariant = {
    type:string;
    value:string
}
export type TInventory ={
    quantity: number ;
    inStock:boolean ;
}