const dbConfig = require('./db.config');

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool:{  // pool meanshow many connections u want at a time
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle  // timing
    }
});

module.exports = sequelize;