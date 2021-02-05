module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        body: {
            type: DataTypes.TEXT
        }   
    });

    Note.associate = function(models) {
        Note.belongsTo(models.User, {
            onDelete: "cascade"
        });
    };

    Note.associate = function(models) {
        Note.belongsTo(models.Application, {
            onDelete: "cascade"
        });
    };

    return Note;
};