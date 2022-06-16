/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { CustomerTemplateInterface } from '../schema/customer';

export default (sequelize: any, DataTypes: any) => {
  class Customer extends Model implements CustomerTemplateInterface {
    id: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Customer.belongsTo(models.User);
    }
  }
  Customer.init(
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
      modelName: 'Customer',
    }
  );
  return Customer;
};
