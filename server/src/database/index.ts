/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import Sequelize from 'sequelize';

/** Local dependencies */
import { Application } from '../declarations';

/** Tables */

import user from './user';

import service from './service';

import notification from './notification';

import refreshToken from './refresh-token';
import emailTemplate from './emailTemplate';

const tables = [user, service, notification, refreshToken, emailTemplate];

export default function (app: Application): void {
  const sequelize = app.get('sequelizeClient');

  tables.forEach((table) => {
    table(sequelize, Sequelize.DataTypes);
  });
}
