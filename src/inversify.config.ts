import { Container } from 'inversify';
import 'reflect-metadata';
import ExpressServer from './expressServer';
import StartUp from './startUp';  

import loadRouters from './routers/inversify.router.config'; 
import loadControllers from './controllers/inversify.controller.config';

const container  = new Container();


container.bind(ExpressServer).toSelf().inSingletonScope();
container.bind(StartUp).to(StartUp).inSingletonScope();  
container.load(loadControllers);
container.load(loadRouters);
 
 
export default container;

