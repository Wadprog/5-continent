// Initializes the `store` service on path `/store`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Store } from './store.class';
import createModel from '../../models/store.model';
import hooks from './store.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'store': Store & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/store', new Store(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('store');

  service.hooks(hooks);
}
