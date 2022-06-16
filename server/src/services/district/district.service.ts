// Initializes the `district` service on path `/district`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { District } from './district.class';
import createModel from '../../models/district.model';
import hooks from './district.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'district': District & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/district', new District(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('district');

  service.hooks(hooks);
}
