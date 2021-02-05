module.exports = function(sequelize, DataTypes) {
    var Note = sequelize.define("Note", {
        body: {
            type: DataTypes.TEXT
        },
        userID: {
            type: DataTypes.INTEGER
        }  
    });

    Note.associate = function(models) {
        Note.belongsTo(models.Application, {
            onDelete: "cascade"
        });
    };

    return Note;
};