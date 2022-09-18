module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define('user_roles', {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },

        role_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        created_by: {
            type: Sequelize.STRING,
           
        },
       
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false,
        underscored: true
    });

    return UserRole;
}

