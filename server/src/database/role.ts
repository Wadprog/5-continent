/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { RoleTemplateInterface } from '../schema/role';

export default (sequelize: any, DataTypes: any) => {
  class Role extends Model implements RoleTemplateInterface {
    id: string;

    name: string;

    startingSalary: number;

    topSalary: number;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      Role.belongsTo(models.Department);
    }
  }
  Role.init(
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

      startingSalary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },

      topSalary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: 'RoleTemplate',
    }
  );
  return Role;
};
