const user = require("./user");

module.exports = function(sequelize, DataTypes) {
    var Application = sequelize.define("Application", {
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1]}
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1]}
        },
        jobsitelink: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5],
                isUrl: true 
            }
        },
    });

    Application.associate = function(models) {
        Application.belongsTo(models.User, {
            foreignKey : {
                allowNull: false
            }
        });
    };

    Application.associate = function(models) {
        Application.hasMany(models.Note, {
            onDelete: "cascade"
        });
    };

    return Application;
};