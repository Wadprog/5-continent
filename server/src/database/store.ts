/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { StoreTemplateInterface } from '../schema/store';

export default (sequelize: any, DataTypes: any) => {
  class Store extends Model implements StoreTemplateInterface {
    id: string;

    name: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      Store.belongsTo(models.City);
      Store.hasMany(models.Employee);
      Store.belongsTo(models.Street);
      Store.belongsTo(models.Country);
      Store.belongsTo(models.District);
      Store.hasMany(models.Department);
    }
  }
  Store.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'StoreTemplate',
    }
  );
  return Store;
};
