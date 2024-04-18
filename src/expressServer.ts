import express from 'express';
import { inject, injectable, multiInject } from 'inversify';  
import ApiRouter from './routers/apiRouter';

@injectable()
export default class ExpressServer {
    private app: express.Application;

    constructor(@inject(ApiRouter) private apiRouter: ApiRouter){
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true })); 
        this.app.use(this.apiRouter.router);
    }

    public Listen(port: number, host:string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.app.listen(port, host, () => {
                console.log(`Server is running on http://${host}:${port}`);
                resolve();
            });
        });
    }
}
