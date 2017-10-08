import { Injectable, Container } from 'container-ioc';

const TApplication = Symbol('IApplication');

const TService = Symbol('IService');

@Injectable([TService])
export class Application implements IApplication {
    constructor(service) {
        this.service = service;
    }

    run() {
        this.service.serve();
    }
}

@Injectable()
export class Service implements IService {
    serve() {
        // serves
    }
}

const container = new Container();

container.register([
    { token: TApplication, useClass: Application },
    { token: TService, useClass: Service }
]);

const app = container.resolve(TApplication);

app.run();