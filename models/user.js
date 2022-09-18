module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        username: {
            type: Sequelize.STRING,
           
        },
        password: {
            type: Sequelize.STRING,
           
        },
        fullname: {
            type: Sequelize.STRING,
           
        },
        avatar: {
            type: Sequelize.STRING,
           
        },
       
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });

    return User;
}

