
const Sequelize = require('sequelize');
// const getPosts = () => {
//     const Sequelize = require('sequelize');
//     const sequelize = new Sequelize({
//         dialect: 'sqlite',
//         storage: 'database.sqlite'
//     });
//     sequelize
//         .authenticate()
//         .then(() => {
//             console.log('Connection has been established successfully.');
//         })
//         .catch(err => {
//             console.error('Unable to connect to the database:', err);
//         });
//     return ["Hello", "World"];
// }
const dbConnection = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  })
module.exports = dbConnection;

