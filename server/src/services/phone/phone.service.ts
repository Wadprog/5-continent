// Initializes the `phone` service on path `/phone`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Phone } from './phone.class';
import createModel from '../../models/phone.model';
import hooks from './phone.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'phone': Phone & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/phone', new Phone(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('phone');

  service.hooks(hooks);
}
