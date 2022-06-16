/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { CityTemplateInterface } from '../schema/city';

export default (sequelize: any, DataTypes: any) => {
  class City extends Model implements CityTemplateInterface {
    id: string;

    name: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      City.belongsTo(models.State);
      City.hasMany(models.District);
    }
  }
  City.init(
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
      modelName: 'City',
    }
  );
  return City;
};
