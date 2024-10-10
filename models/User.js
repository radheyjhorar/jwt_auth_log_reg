// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config').development;

// class User extends Model {}

// User.init(
//   {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password : {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   },
//   {
//     sequelize,
//     modelName: 'User',
//   }
// );

// module.exports = User;





// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {

//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//   });

//   return User
// };


const Sequelize = require('sequelize').DataTypes;
const sequelize = require('../config/config');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

module.exports = User;