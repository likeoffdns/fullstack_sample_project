const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');
class Item extends Model {}

Item.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,

    },
    image:{
        type: DataTypes.STRING
    },
    dimensions:{
        type:DataTypes.JSON
    },
    weight:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    rating:{
        type: DataTypes.INTEGER,
        min:1,
        max:5
    }

}, {
    sequelize,
    timestamps: false,
    tableName: 'items',
});

module.exports = { Item };

