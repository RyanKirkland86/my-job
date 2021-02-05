module.exports = function(sequelize, DataTypes) {
    var Recruiter = sequelize.define("Recruiter", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1]}
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3],
                isEmail: true
            }
        },
    });

    Recruiter.associate = function(models) {
        Recruiter.belongsTo(models.Application, {
            onDelete: "cascade"
        });
    };

    return Recruiter;
};