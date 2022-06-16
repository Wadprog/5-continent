/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { PhoneTemplateInterface } from '../schema/Phone';

export default (sequelize: any, DataTypes: any) => {
  class Phone extends Model implements PhoneTemplateInterface {
    id: string;

    number: string;

    areaCode: string;

    isPreferred: boolean;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      Phone.belongsTo(models.User);
    }
  }
  Phone.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      value: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      isPreferred: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'PhoneTemplate',
    }
  );
  return Phone;
};
