import CharacterRepository from "../respositories/character.repository";
import ImageRepository from "../respositories/image.repository";

const characterRepository = new CharacterRepository();
const imageRepository = new ImageRepository();

export const findAll = async () => {
    return await characterRepository.findAll();
}

export const findCharacterById = async (id) => {
    return await characterRepository.findCharacterById(id);
}

export const createCharacter = async (character) => {
    return await characterRepository.createCharacter(character);
}

export const updateCharacter = async (id, character) => {
    return await characterRepository.updateCharacter(id, character);
}

export const deleteCharacter = async (id) => {
    const character = await characterRepository.findCharacterById(id);

    await imageRepository.deleteImage(character.image);

    return await characterRepository.deleteCharacter(id);
}