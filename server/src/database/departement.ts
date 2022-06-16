/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { DepartmentTemplateInterface } from '../schema/department';

export default (sequelize: any, DataTypes: any) => {
  class Department extends Model implements DepartmentTemplateInterface {
    id: string;

    name: string;

    startingSalary: number;

    topSalary: number;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      Department.hasMany(models.Role);
      Department.belongsTo(models.Department);
      Department.belongsToMany(models.Store, { through: 'store-departments' });
    }
  }
  Department.init(
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
      modelName: 'DepartmentTemplate',
    }
  );
  return Department;
};
