const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./index');

class Order extends Model {}

Order.init({
    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer: {
        type: DataTypes.INTEGER
    },
    orderDate:{
        type: DataTypes.STRING
    },
    shippingDate:{
        type: DataTypes.STRING
    },
    price:{
        type:DataTypes.INTEGER
    },
    cost:{
        type:DataTypes.INTEGER
    },
    items: {
        type:DataTypes.JSON
    }

}, {
    sequelize,
    timestamps: false,
    tableName: 'orders',
});


module.exports = { Order  };
