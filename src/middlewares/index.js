const cors = require('cors');
const express = require('express');
const { LOCAL_CLIENT, CLIENT } = require('../config/defaults');

const applyMiddleware = (app) => {
  app.use(
    cors({
      origin: [LOCAL_CLIENT, CLIENT],
      credentials: true,
    })
  );
  app.use(express.json());
};

module.exports = applyMiddleware;
