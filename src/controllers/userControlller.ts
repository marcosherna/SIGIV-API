import { injectable } from "inversify";
import { Request, Response } from "express";

@injectable()
export default class UserController {
    
    public async getUser(req: Request, res: Response) {
        return res.json({ message: 'Hello World' });  
    }
}