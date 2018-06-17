
import { db } from './clsDb';
import { ArticleModel } from './../apps/models/articles.model';

export interface Article {

    id: string;
    name: string;
    url: string;
    description: string;
    userId: string;

}

export class ClsArticle {

    objArticle: any;
    constructor() {
        this.objArticle = ArticleModel.init();
    }

    public async addArticle(article: Article): Promise<any> {
        return  this.objArticle.create(article);
    }

    public async getArticle(artId: number): Promise<any> {
        return this.objArticle.findById(artId);
    }

    public async updateArticle(artId: number, article: Article): Promise<any> {
        return this.objArticle.update(article, { where: { id: artId } })
    }
    
    public async deleteArticle(artId: number): Promise<any> {
        return this.objArticle.destroy({ where: { id: artId } });
    }
}
