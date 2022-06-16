/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { DistrictTemplateInterface } from '../schema/district';

export default (sequelize: any, DataTypes: any) => {
  class District extends Model implements DistrictTemplateInterface {
    id: string;

    name: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      District.belongsTo(models.City);
    }
  }
  District.init(
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
      modelName: 'District',
    }
  );
  return District;
};
