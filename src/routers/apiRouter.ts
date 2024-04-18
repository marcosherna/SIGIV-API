import { injectable, multiInject } from "inversify";
import { Router } from "express"; 
import BaseRouter from "./baseRouter";

@injectable()
export default class ApiRouter extends BaseRouter {
    constructor(
        @multiInject(BaseRouter) private routers: BaseRouter[]){
        super(Router(), '/api');

        this.routers.forEach(router => {
            this.invoke.use(router.router);
        });
    }
}