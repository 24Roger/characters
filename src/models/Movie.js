import { DataTypes } from 'sequelize';
import sequelize from '../database';
import GenreType from './GenreType';
import ContentType from './ContentType';

const Movie = sequelize.define(
    'movies',
    {
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        creationDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        calification: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        genreTypeId: {
            type: DataTypes.INTEGER,
            references: {
                model: GenreType,
                key: 'id',
            },
            allowNull: false,
        },
        contentTypeId: {
            type: DataTypes.INTEGER,
            references: {
                model: ContentType,
                key: 'id',
            },
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
);

Movie.belongsTo(
    GenreType,
    {
        foreignKey: 'genreTypeId',
        as: 'genreType',
        targetKey: 'id',
    }
);

Movie.belongsTo(
    ContentType,
    {
        foreignKey: 'contentTypeId',
        as: 'contentType',
        targetKey: 'id',
    }
);

export default Movie;