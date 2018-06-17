
const express = require('express');
import { ArticleController } from './apps/articleController';
import { UserController } from './apps/userController';
let async = require('async'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    methodOverride = require('method-override');

export const app = express();

class middleWare {

    public static async init(app): Promise<boolean> {

        app.use(logger('dev'));
        // app.set('view engine', 'ejs');
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(methodOverride('_method'));
        return true;
    }
}

export class AppSetUp {

    public static async init(): Promise<boolean> {

        try {
            await middleWare.init(app);
            await ArticleController.init(app);
            await UserController.init(app);
            const PORT = 3001;
            app.listen(PORT);
            return true;
        } catch (error) {
            console.log('Error : ', JSON.stringify(error));
            throw (error);
        }
    }
}
