module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "TejA@123",
    DB: "translation",
    dialect: "mysql",
    pool: {
        max: 30,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};