import { Router } from "express";
import BaseRouter from "./baseRouter";
import { inject, injectable } from "inversify";
import ProductController from "../controllers/ProductController";

@injectable()
export default class ProductRouter extends BaseRouter {
    constructor(@inject(ProductController) private productController: ProductController){
        super(Router(), '/product');
        this.invoke.get('/', productController.getProducts)
    }
}