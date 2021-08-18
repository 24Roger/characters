import { DataTypes } from 'sequelize';
import sequelize from '../database';
import Movie from './Movie';

const Character = sequelize.define(
    'characters',
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        history: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

Character.belongsToMany(
    Movie,
    {
        through: 'charactersMovies',
        as: 'movies'
    }
);

Movie.belongsToMany(
    Character,
    {
        through: 'charactersMovies',
        as: 'characters'
    }
);

export default Character;
