/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { EmailTemplateInterface } from '../schema/email';

export default (sequelize: any, DataTypes: any) => {
  class Email extends Model implements EmailTemplateInterface {
    id: string;

    value: string;

    isPreferred: boolean;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      Email.belongsTo(models.User);
    }
  }
  Email.init(
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
      modelName: 'EmailTemplate',
    }
  );
  return Email;
};
