const user = require("./user");

var statusopts = ["Applied - Awaiting Response", "Recruiter Responded", "Interview Scheduled", "Interview Completed", "Offer Made", "Rejection"];

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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            default: "Applied - Awaiting Response",
            validate: {
                len: [1],
                // isIn: [statusopts] // This is causing problems. -JK
            }
        },
        recruiterName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        recruiterContact: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        }    
    });

    Application.associate = function(models) {
        Application.hasMany(models.Note, {
            onDelete: "cascade"
        });
    };
    
    
    Application.associate = function(models) {
        Application.belongsTo(models.User, {
            foreignKey : {
                allowNull: false
            }
        });
    };

    return Application;
};