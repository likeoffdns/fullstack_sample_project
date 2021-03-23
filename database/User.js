const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');
class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,

    },
    birthday:{
        type: DataTypes.STRING,

    },
    adress:{
        type: DataTypes.JSON,

    },
    rating:{
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'users',
});

module.exports = { User };
