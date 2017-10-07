import { Container, Injectable, LifeTime } from 'container-ioc';

@Injectable()
class A {}

const container = new Container();

container.register({ token: A, useClass: A, lifeTime: LifeTime.PerRequest });

const instance1 = container.resolve(A);
const instance2 = container.resolve(A);

// instance1 !== instance2