const express = require('express')
const db_model = require('../models/workorder')
const workorderRouter = express.Router();

workorderRouter.route('/') 
.get((req, res) => {
    db_model.getWorkorders()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
.post((req, res) => {
    db_model.createWorkorder(req.body)
    .then(response => {
      console.log(response)
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })
  
  .put((req, res) => {
    console.log(req.body)
    db_model.editWorkorder(req.body)
   
    .then(response => {
      
      
      res.status(200).send(response);
      
    })
    .catch(error => {
      res.status(500).send(error);
      console.log(error)
    })
  })
  
   .delete((req, res) => {
    db_model.deleteWorkorder(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    });

    module.exports = workorderRouter; 
  