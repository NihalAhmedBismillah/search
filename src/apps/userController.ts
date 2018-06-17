import { User, ClsUser } from './../lib/clsUser'

export class UserController {


    public static async init(app): Promise<boolean> {

        app.post('/api/v1/users', async (req, res) => {

            let bodyData: User = req.body;
            try {
                await new ClsUser().addUser(bodyData);
            } catch (error) {
                console.log('error ', error);
            }
            res.send(bodyData);
        });

        app.get('/api/v1/users/:id', async (req, res) => {

            let artId = req.params.id;
            let reuslt: any = await new ClsUser().getUser(req.params.id);
            res.json(reuslt);
        });
        app.get('/api/v1/users', async (req, res) => {
            let reuslt: any = await new ClsUser().dbQuery(`select * from users`);
            res.json(reuslt);
        });


        app.put('/api/v1/users/:id', async (req, res) => {

            let id: number = req.params.id;
            let bodyData: User = req.body;
            let result = await new ClsUser().updateUser(id, bodyData);
            res.send(JSON.stringify(result));
        });

        app.delete('/api/v1/users/:id', async (req, res) => {
            let artId = req.params.id;
            let reuslt: any = await new ClsUser().deleteUser(req.params.id)
            res.json(reuslt);
        });
        return true;
    }
}
