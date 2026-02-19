import { Injectable } from "@nestjs/common";
import{ Product } from './products.model'

@Injectable()
export class ProductsService{
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number){
    const prodId= new Date().toString();
    const newProduct = new Product(new Date().toString(), title, desc, price)
    this.products.push(newProduct);
    console.log(prodId)
    return prodId;
    }

    getProducts(){
        return [...this.products];
    }
}