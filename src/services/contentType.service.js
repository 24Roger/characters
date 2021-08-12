import ContentTypeRepository from "../respositories/contentType.repository";

const contentTypeRepository = new ContentTypeRepository();

export const findAll = async () => {
    return await contentTypeRepository.findAll();
}

export const findById = async (id) => {
    return await contentTypeRepository.findById(id);
}

export const findByContent = async (content) => {
    return await contentTypeRepository.findByContent(content);
}

export const createContentType = async (content) => {
    return await contentTypeRepository.createContentType(content);
}

export const updateContentType = async (id, content) => {
    return await contentTypeRepository.updateContentType(id, content);
}

export const deleteContentType = async (id) => {
    return await contentTypeRepository.deleteContentType(id);
}
