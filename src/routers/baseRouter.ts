import { Router } from "express";
import { injectable, unmanaged } from "inversify";

@injectable()
export default class BaseRouter {
    public router: Router = Router();
    constructor(
        @unmanaged() protected invoke: Router,
        @unmanaged() protected path: string){ 
            
        this.router.use(this.path, this.invoke);

    }
}