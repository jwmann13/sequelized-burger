module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: DataTypes.BOOLEAN
    });

    Burger.associate = function (models) {
        Burger.hasMany(models.Customer, {
            onDelete: "cascade"
        })
    }

    return Burger;
}