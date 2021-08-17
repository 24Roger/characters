import AWS from 'aws-sdk';
import config from '../config/config';
import AppError from '../errors/appError';

class ImageRepository {
    constructor() {
        this.s3 = new AWS.S3(
            {
                accessKeyId: config.aws.accessKeyId,
                secretAccessKey: config.aws.secretAccessKey
            }
        );
    }

    uploadImage(name, image, type) {
        return new Promise((resolve, reject) => {
            const params = {
                Bucket: config.aws.bucketName,
                Key: name,
                Body: image,
                ContentType: type,
                ACL: 'public-read'
            };

            this.s3.upload(params, (error, data) => {
                if (error) {
                    reject(new AppError(error.message, 502));
                }
                resolve(`https://${config.aws.bucketName}.s3.amazonaws.com/${name}`);
            });
        });
    }

    deleteImage(Key) {
        Key = Key.split('/')[3];

        return new Promise((resolve, reject) => {
            const params = {
                Bucket: config.aws.bucketName,
                Key
            };

            this.s3.deleteObject(params, (error, data) => {
                if (error) {
                    reject(new AppError(error.message, 502));
                }

                resolve(true);
            });
        });
    }
}

export default ImageRepository;