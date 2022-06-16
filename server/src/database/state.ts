/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { StateTemplateInterface } from '../schema/state';

export default (sequelize: any, DataTypes: any) => {
  class State extends Model implements StateTemplateInterface {
    id: string;

    name: string;

    initials: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      State.belongsTo(models.Country);
      State.hasMany(models.City);
    }
  }
  State.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'State',
    }
  );
  return State;
};
