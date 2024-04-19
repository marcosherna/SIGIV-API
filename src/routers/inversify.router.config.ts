import path from "path";
import loadModule from "../utils/loadModule";
import BaseRouter from "./baseRouter";
import {  ContainerModule, interfaces } from "inversify";
import ApiRouter from "./apiRouter";

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {

    const PATH_ROUTERS = path.join(__dirname);
    const extensions = ['ts'];
    const exclude = /(baseRouter|inversify.router.config)\.ts$/;
    const routers = loadModule(PATH_ROUTERS, extensions, exclude);

    for (const key in routers) {
        if (routers.hasOwnProperty(key)) {

            const router: any = routers[key];

            // verificar el decorador de inversify  
            if (Object.getPrototypeOf(router.default) === BaseRouter) { // si hereda
                if (router.default.name === ApiRouter.name) { 
                    bind(router.default).toSelf().inSingletonScope();
                } else {
                    bind(BaseRouter).to(router.default).inSingletonScope();
                }
            }
        }
    }
});
    
