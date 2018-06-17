import { DataType, IsEmail, IsNumeric, Is } from 'sequelize-typescript';

export class UserModel {

    public static init() {

        let user = global['db'].define('users', {
            id: {
                type: DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    checkName(value) {
                        if (value.length < 10) {
                            throw new Error('Name should be more than 10 charactor!')  //Just test with validator.
                        }
                    },
                },
            },
            mobileNo: {
                type: DataType.STRING,
                allowNull: false,
                IsNumeric: true
            },
            email: {
                type: DataType.STRING,
                allowNull: false,
                IsEmail: true
            },
            // Timestamps
            createdAt: { type: DataType.DATE, defaultValue: DataType.NOW },
            updatedAt: { type: DataType.DATE, defaultValue: DataType.NOW },
        });
        return user;
    }
}

