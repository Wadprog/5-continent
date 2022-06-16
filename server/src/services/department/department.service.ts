// Initializes the `department` service on path `/department`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Department } from './department.class';
import createModel from '../../models/department.model';
import hooks from './department.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'department': Department & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/department', new Department(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('department');

  service.hooks(hooks);
}
