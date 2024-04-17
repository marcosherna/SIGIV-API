import container from './src/inversify.config';
import StartUp from './src/startUp';

const applicaction = container.get<StartUp>(StartUp);

applicaction.init().then(() => {
    console.log('Application started');
}).catch((error) => {    
    console.log(error);
});