const express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/config');
const authRoutes = require('./routes/auth');
// const user = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());

// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
// });

app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
})