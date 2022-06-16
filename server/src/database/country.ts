/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { CountryTemplateInterface } from '../schema/country';

export default (sequelize: any, DataTypes: any) => {
  class Country extends Model implements CountryTemplateInterface {
    id: string;

    name: string;

    initials: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Country.belongsTo(models.Country);
      Country.hasMany(models.City);
    }
  }
  Country.init(
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
      modelName: 'Country',
    }
  );
  return Country;
};
