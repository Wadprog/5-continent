/* eslint-disable import/no-import-module-exports */
import { nanoid } from 'nanoid';
import { Model } from 'sequelize';

// Custom imports
import { UserInterface } from '../schema/user';

export default (sequelize: any, DataTypes: any) => {
  class User extends Model<UserInterface> implements UserInterface {
    id: string;

    about: string;

    admin: boolean;

    active: boolean;

    avatar: string | undefined;

    activationKey?: string | null;

    birthday: string;

    backgroundImage: string;

    backgroundImageStatus: boolean;

    coverPicture: string | undefined;

    firstName: string;

    gender: string;

    lastSeen: Date;

    lastName: string;

    loginAttempts: number;

    lastSeenPrivacy: boolean;

    online: boolean;

    password: string | undefined;

    profilePicture: string | undefined;

    resetExpires: Date;

    resetAttempts: number;

    resetPasswordKey?: string | undefined;

    resetShortPasswordKey?: string | undefined;

    search_vector: string;

    username?: string | undefined;

    // eslint-disable-next-line no-unused-vars
    static associate(models: any) {}
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      resetAttempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      loginAttempts: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      avatar: { type: DataTypes.STRING, allowNull: true, unique: true },
      username: { type: DataTypes.STRING, allowNull: true, unique: true },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        // @ts-ignore
        level: 'B',
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        // @ts-ignore
        level: 'A',
      },

      gender: {
        type: DataTypes.STRING,
        defaultValue: 'not specified',
      },

      interestedBy: {
        type: DataTypes.STRING,
        defaultValue: 'not specified',
      },

      about: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      activationKey: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: () => nanoid(),
      },
      resetPasswordKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      lastSeenPrivacy: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },

      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

      online: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      lastSeen: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },

      resetExpires: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      coverPicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      search_vector: {
        type: DataTypes.TSVECTOR,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
