module.exports = (sequelize, DataTypes) => {
    let Burger = sequelize.define('burgers', {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    })
}