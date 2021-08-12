import { DataTypes } from 'sequelize';
import sequelize from '../database';

const ContentType = sequelize.define(
    'contentTypes',
    {
        content: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

export default ContentType;