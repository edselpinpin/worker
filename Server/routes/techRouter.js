const express = require('express')
const db_model = require('../models/tech')
// TECHNICIAN 
const techRouter = express.Router();
techRouter.route('/')
.get((req, res) => {
    db_model.getTech()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
 .post((req, res) => {
    db_model.createTech(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  .put((req, res) => {
    db_model.editTech(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .delete((req, res) => {
    db_model.deleteTech(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    });

    module.exports =  techRouter;
        
    

  