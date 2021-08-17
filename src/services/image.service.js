import ImageRepository from '../respositories/image.repository';
import CharacterRepository from '../respositories/character.repository';
import MovieRepository from '../respositories/movie.repository';

const imageRepository = new ImageRepository();
const characterRepository = new CharacterRepository();
const movieRepository = new MovieRepository();

export const uploadCharacterImage = async (id, image) => {
    const character = await characterRepository.findById(id);

    if (character.image) {
        await imageRepository.deleteImage(character.image);
    }

    const imageURL = await imageRepository.uploadImage(
        image.originalname,
        image.buffer,
        image.mimetype
    );

    return await characterRepository.updateCharacter(
        id,
        {
            image: imageURL
        }
    );
}

export const uploadMovieImage = async (id, image) => {
    const movie = await movieRepository.findAll(id);

    if (movie.image) {
        await imageRepository.deleteImage(movie.image);
    }

    const imageURL = await imageRepository.uploadImage(
        image.originalname,
        image.buffer,
        image.mimetype
    );

    return await movieRepository.updateMovie(
        id,
        {
            image: imageURL
        }
    );
}
