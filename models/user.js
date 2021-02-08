var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1]
            },
        },
    //Allowing null first name...We will show either welcome First name as default or username if no first name available
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
    //Allowing null last name as well
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
                isAlphanumeric: true
    //Changed a-f to a-z -> Changed to isAlphanumeric, wasn't getting the regex to work properly

            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unqiue: true,
            validate: {
    //Do we need the length here? - > not necessarily, but it basically guarantees at least a length of x@y
                len: [3],
                isEmail: true 
            }
        }
    });
    
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    User.associate = function(models) {
        User.hasMany(models.Application, {
            onDelete: "cascade"
        });
    };

    return User;
};