import { Container } from 'inversify';
import 'reflect-metadata';
import ExpressServer from './expressServer';
import StartUp from './startUp';

const container  = new Container();

container.bind(ExpressServer).to(ExpressServer).inSingletonScope();
container.bind(StartUp).to(StartUp).inSingletonScope();

export default container;