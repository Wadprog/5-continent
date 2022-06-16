/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { AddressTemplateInterface } from '../schema/address';

export default (sequelize: any, DataTypes: any) => {
  class Address extends Model implements AddressTemplateInterface {
    id: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Address.belongsTo(models.Country);
      Address.belongsTo(models.Street);
      Address.belongsTo(models.City);

      Address.belongsToMany(models.User, { through: 'places' });
    }
  }
  Address.init(
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
      modelName: 'Address',
    }
  );
  return Address;
};
