import { Container } from 'inversify';
import 'reflect-metadata';
import ExpressServer from './expressServer';
import StartUp from './startUp'; 
import ApiRouter from './routers/apiRouter';
import BaseRouter from './routers/baseRouter';
import UserRouter from './routers/userRouter';
import UserController from './controllers/userControlller';

const container  = new Container();

container.bind(ExpressServer).toSelf().inSingletonScope();
container.bind(StartUp).to(StartUp).inSingletonScope(); 
container.bind(UserController).to(UserController).inSingletonScope();
container.bind(BaseRouter).to(UserRouter).inSingletonScope();
container.bind(ApiRouter).toSelf();

export default container;