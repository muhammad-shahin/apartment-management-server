const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT, CLIENT } = require('../config/defaults');

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    })
  );
  app.use(express.json());
};

module.exports = applyMiddleware;
