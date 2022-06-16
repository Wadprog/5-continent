// Initializes the `country` service on path `/pais`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Country } from './country.class';
import createModel from '../../models/country.model';
import hooks from './country.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'pais': Country & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pais', new Country(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pais');

  service.hooks(hooks);
}
