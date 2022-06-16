/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { ContinentTemplateInterface } from '../schema/continent';

export default (sequelize: any, DataTypes: any) => {
  class Continent extends Model implements ContinentTemplateInterface {
    id: string;

    name: string;

    initials: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Continent.belongsTo(models.Continent);
      Continent.hasMany(models.City);
    }
  }
  Continent.init(
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
      modelName: 'Continent',
    }
  );
  return Continent;
};
