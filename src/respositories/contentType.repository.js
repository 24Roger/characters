import ContentType from '../models/ContentType';

class ContentTypeRepository {
    constructor() { }

    async findAll() {
        return await ContentType.findAll(
            {
                attributes: [
                    'id',
                    'content'
                ]
            }
        );
    }

    async findContentById(id) {
        return await ContentType.findByPk(
            id,
            {
                attributes: [
                    'content'
                ]
            });
    }

    async findByContent(content) {
        return await ContentType.findOne(
            {
                where: {
                    content
                },
                attributes: [
                    'id',
                    'content'
                ]
            }
        );
    }

    async createContentType(content) {
        return await ContentType.create(content);
    }

    async updateContentType(id, content) {
        return await ContentType.update(
            content,
            {
                where: {
                    id
                }
            }
        );
    }

    async deleteContentType(id) {
        return await ContentType.destroy(
            {
                where: {
                    id
                }
            }
        );
    }
}

export default ContentTypeRepository;