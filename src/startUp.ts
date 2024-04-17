import { inject, injectable } from "inversify";
import ExpressServer from "./expressServer";

@injectable()
export default class StartUp {
    constructor(@inject( ExpressServer) private  expressServer: ExpressServer){
    }

    public async init()  {
        try {
            await this.expressServer.Listen(3000, 'localhost'); 
        } catch (error) {
            console.log(error);
        }
        
    }
}