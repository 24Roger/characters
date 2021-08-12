import { DataTypes } from 'sequelize';
import sequelize from '../database';

const User = sequelize.define(
    'users',
    {
        userName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM({
                values: ['admin', 'user']
            }),
            defaultValue: 'user',
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
    {
        timestamps: true,
    }
);

export default User;