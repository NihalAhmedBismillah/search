import { AppSetUp } from "./appsetUp";
import { db } from './lib/clsDb'

export class Application {

    public static async run() {
        try {
            await AppSetUp.init();
            let objDb = await db.init();
            global['db'] = objDb;
            return true;
            
        }
        catch (error) {
            console.log('Error :', JSON.stringify(error));
            throw (error);
        }
    }
}
Application.run().then(() => {
    console.log('server started on post no : 3001');
}).catch((error) => {
    console.log('Error :', JSON.stringify(error));
    process.exit(1)
})

