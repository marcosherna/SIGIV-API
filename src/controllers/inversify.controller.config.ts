import path from "path";
import loadModule from "../utils/loadModule"; 
import {  ContainerModule, interfaces } from "inversify"; 

export default new ContainerModule((bind: interfaces.Bind, unbind: interfaces.Unbind) => {

    const PATH_ROUTERS = path.join(__dirname);
    const extensions = ['ts'];
    const exclude = /(inversify.controller.config)\.ts$/;
    const controllers = loadModule(PATH_ROUTERS, extensions, exclude);

    for (const key in controllers) {
        if (controllers.hasOwnProperty(key)) {
            const controller: any = controllers[key];

            bind(controller.default).toSelf().inSingletonScope();
        }
    }
});
    
