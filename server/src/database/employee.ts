/* eslint-disable import/no-import-module-exports */
import { Model } from 'sequelize';

// Custom imports

import { EmployeeTemplateInterface } from '../schema/empoloyee';

export default (sequelize: any, DataTypes: any) => {
  class Employee extends Model implements EmployeeTemplateInterface {
    id: string;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {
      // define association here
      Employee.belongsTo(models.User);
      Employee.belongsToMany(models.Role, {
        through: 'employeeRoles',
        as: 'roles',
      });
      Employee.belongsToMany(models.Department, {
        through: 'employeeDepartment',
        as: 'roles',
      });
      Employee.belongsTo(models.Store);
    }
  }
  Employee.init(
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
      modelName: 'Employee',
    }
  );
  return Employee;
};
