/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { StreetTemplateInterface } from '../schema/street';

export default (sequelize: any, DataTypes: any) => {
  class Street extends Model implements StreetTemplateInterface {
    id: string;

    zipCode: string;

    type: string;

    name: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Street.belongsTo(models.District);
    }
  }
  Street.init(
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
      modelName: 'Street',
    }
  );
  return Street;
};
