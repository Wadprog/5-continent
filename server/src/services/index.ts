import { Application } from '../declarations';
/** Local dependencies */

import users from './users/users.service';
import search from './search/search.service';
import mailer from './mailer/mailer.service';
import services from './services/services.service';
import notification from './notification/notification.service';
import emailTemplate from './email-template/email-template.service';
import refreshTokens from './refresh-tokens/refresh-tokens.service';
import authmanagementService from './authmanagement/authmanagement.service';

import employees from './employees/employees.service';

import country from './country/country.service';

import state from './state/state.service';

import district from './district/district.service';

import city from './city/city.service';

import street from './street/street.service';

import role from './role/role.service';

import department from './department/department.service';

import store from './store/store.service';

import customers from './customers/customers.service';

import email from './email/email.service';

import phone from './phone/phone.service';

import address from './address/address.service';

export default function (app: Application): void {
  app.configure(users);
  app.configure(mailer);
  app.configure(search);
  app.configure(services);
  app.configure(notification);
  app.configure(refreshTokens);
  app.configure(emailTemplate);
  app.configure(authmanagementService);
  app.configure(employees);
  app.configure(country);
  app.configure(state);
  app.configure(district);
  app.configure(city);
  app.configure(street);
  app.configure(role);
  app.configure(department);
  app.configure(store);
  app.configure(customers);
  app.configure(email);
  app.configure(phone);
  app.configure(address);
}
