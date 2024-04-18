import { inject, injectable } from "inversify";
import BaseRouter from "./baseRouter";
import { Router } from "express";
import UserController from "../controllers/userControlller";

@injectable()
export default class UserRouter extends BaseRouter{
    constructor(@inject(UserController) userController: UserController){
        super(Router(), '/user');
        
        this.invoke.get('/', userController.getUser);
    }
}