import { DataType } from 'sequelize-typescript';

export class ArticleModel {

    public static  init() {

        let articles = global['db'].define('articles', {
            id: {
                type: DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false
            },
            url: {
                type: DataType.STRING,
                allowNull: false
            },
            description: {
                type: DataType.STRING,
                allowNull: false
            },
            userId: {
                type: DataType.INTEGER,
                allowNull: false
            }
        });
        return articles;
    }
}

