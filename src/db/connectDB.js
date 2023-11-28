const mongoose = require('mongoose');
require('dotenv');

const getConnectionString = () => {
  let connectionUrl;

  if (process.env.NODE_ENV === 'development') {
    connectionUrl = process.env.DATABASE_LOCAL;
    connectionUrl = connectionUrl.replace(
      '<username>',
      process.env.DATABASE_LOCAL_USERNAME
    );
    connectionUrl = connectionUrl.replace(
      '<password>',
      process.env.DATABASE_LOCAL_PASSWORD
    );
  } else if (process.env.NODE_ENV === 'production') {
    connectionUrl = process.env.DATABASE_PROD;
    connectionUrl = connectionUrl.replace(
      '<username>',
      process.env.DATABASE_PRODUCTION_USERNAME
    );
    connectionUrl = connectionUrl.replace(
      '<password>',
      process.env.DATABASE_PRODUCTION_PASSWORD
    );
  }
  return connectionUrl;
};

const connectDB = async () => {
  console.log('Connecting to database...');
  const mongoURI = getConnectionString();

  await mongoose.connect(mongoURI, {
    dbName: process.env.DB_NAME,
  });
  console.log('connected to database');
};

module.exports = connectDB;
