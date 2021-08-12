import CharacterRepository from "../respositories/character.repository";

const characterRepository = new CharacterRepository();

export const findAll = async () => {
    return await characterRepository.findAll();
}

export const findById = async (id) => {
    return await characterRepository.findById(id);
}

export const createCharacter = async (character) => {
    return await characterRepository.createCharacter(character);
}

export const updateCharacter = async (id, character) => {
    return await characterRepository.updateCharacter(id, character);
}

export const deleteCharacter = async (id) => {
    return await characterRepository.deleteCharacter(id);
}