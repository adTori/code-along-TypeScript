export interface ProductModel{
    id: number,
    name: string,
    price: number,
    sold: boolean

}


// Vi använder void eftersom toggleAvailability
// bara ändrar produktens lagerstatus
// och inte behöver returnera något direkt värde.

export interface ProductCardProps{
	product: ProductModel,
	toggleAvailability: (productName:string) => void

}