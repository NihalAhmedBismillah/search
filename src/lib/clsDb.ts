import { Sequelize } from 'sequelize-typescript';

class db {

  public static init(): Sequelize {
   //Create sequelizer instance.
    const db: Sequelize = new Sequelize({
      host: 'localhost',
      database: 'ssdb',
      username: 'root',
      password: 'root',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 300,
        idle: 1000
      }
    });
    return db;
  }
};
export { db, Sequelize };


