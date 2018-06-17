
import { UserModel } from './../apps/models/user.model';
import { db } from './../lib/clsDb';
export interface User {
    id: string;
    name: string;
    mobilNo: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export class ClsUser {

    objUser: any;
    objDb: any;
    
    constructor() {
        
        this.objUser = UserModel.init();
        this.objDb = global['db'];
    }

    public async addUser(user: User): Promise<any> {
        return this.objUser.create(user);
    }

    public async getUser(userId: number): Promise<any> {
        return this.objUser.findById(userId);
    }

    public async updateUser(userId: number, user: User): Promise<any> {
        return this.objUser.update(user, { where: { id: userId } })
    }

    public async deleteUser(userId: number): Promise<any> {
        return this.objUser.destroy({ where: { id: userId } });
    }
    public async dbQuery(query: string): Promise<any> {
        let row = await this.objDb.query(query);
        return (row[0]);
    }
}
