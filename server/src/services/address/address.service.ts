// Initializes the `address` service on path `/address`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Address } from './address.class';
import createModel from '../../models/address.model';
import hooks from './address.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'address': Address & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/address', new Address(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('address');

  service.hooks(hooks);
}
