const express = require('express')
const db_model = require('../models/settings')

const settingsRouter = express.Router();

// SYSTEM SETTINGS 
   
settingsRouter.route('/')

  .get( (req, res) => {
    db_model.getSysSettings()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .post((req, res) => {
   
    console.log(req.body)
    db_model.createSysSettings(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .put((req, res) => {
    console.log(req.body)
    db_model.editSysSettings(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  });

  module.exports = settingsRouter;  