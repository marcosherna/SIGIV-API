import express from 'express';
import { injectable } from 'inversify';

@injectable()
export default class ExpressServer {
    private app: express.Application;

    constructor(){
        this.app = express();
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
