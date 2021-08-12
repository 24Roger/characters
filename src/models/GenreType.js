import { DataTypes } from 'sequelize';
import sequelize from '../database';

const GenreType = sequelize.define(
    'genreTypes',
    {
        genre: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        }
    },
    {
        timestamps: true,
    }
);

export default GenreType;
