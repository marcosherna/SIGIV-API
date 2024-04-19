import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export default class ProductController{
    public async getProducts(req: Request , res: Response){
        res.send('Hello World from ProductController');
    }
}