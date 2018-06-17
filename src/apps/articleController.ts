import { Article, ClsArticle } from './../lib/clsArticle'

export class ArticleController {

    objArticle: any;
    constructor() {
        this.objArticle = new ClsArticle();
    }
    public static async init(app): Promise<boolean> {

        app.post('/api/v1/articles', async (req, res) => {

            let bodyData: Article = req.body;
            await new ClsArticle().addArticle(bodyData);
            res.send(bodyData);
        });

        app.get('/api/v1/articles/:id', async (req, res) => {
            let artId = req.params.id;
            let reuslt: any = await new ClsArticle().getArticle(req.params.id)
            res.json(reuslt);
        });

        app.put('/api/v1/articles/:id', async (req, res) => {

            let id: number = req.params.id;
            let bodyData: Article = req.body;
            let result = await new ClsArticle().updateArticle(id, bodyData);
            res.send(JSON.stringify(result));
        });

        app.delete('/api/v1/articles/:id', async (req, res) => {
            let artId = req.params.id;
            let reuslt: any = await new ClsArticle().deleteArticle(req.params.id)
            res.json(reuslt);
        });

        app.get('/', (req, res) => {

            res.send('server started on post 3001');
        });
        return true;
    }
}
