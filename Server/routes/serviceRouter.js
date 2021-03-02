const express = require('express')
const db_model = require('../models/service')
const serviceRouter = express.Router();
// SERVICE
serviceRouter.route('/')
.get((req, res) => {
    db_model.getServices()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .post((req, res) => {
    db_model.createService(req.body)
   
    .then(response => {
      console.log(req.body)
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
      console.log(error)
    })
  })

  .put((req, res) => {
    db_model.editService(req.body)
    
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
      
    })
  })

  .delete((req, res) => {
    db_model.deleteService(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  });

  module.exports = serviceRouter;
        
  
