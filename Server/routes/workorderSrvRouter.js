const express = require('express')
const db_model = require('../models/workordersrv')
const workorderSrvRouter = express.Router();
// CUSTOMER 
workorderSrvRouter.route('/') 
  
  .post((req, res) => {
    console.log(req.body)
    db_model.createWorkorderDtl(req.body)
    .then(response => {
     
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })
  
  .put((req, res) => {
    
    console.log(req.body)
    db_model.editWorkorderDtl(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .delete((req, res) => {
    console.log(req.body)
    db_model.deleteWorkorderDtl(req.body)
      .then(response => {
        console.log(req.body)
        res.status(200).send(response);
      })
      .catch(error => {
        
        console.log(error)
        res.status(500).send(error);

      })
    });

   workorderSrvRouter.route('/:id') 
    .get((req, res) => {
     db_model.getWorkorderDtl(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  });

    module.exports = workorderSrvRouter;
