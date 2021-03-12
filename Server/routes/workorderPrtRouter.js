const express = require('express')
const db_model = require('../models/workorderPrt')
const workorderPrtRouter = express.Router();
 
workorderPrtRouter.route('/') 
.post((req, res) => {
   
    console.log(req.body)
    db_model.createWorkorderDtlParts(req.body)
    .then(response => {
     
      res.status(200).send(response);
    })
    .catch(error => {
     
      res.status(500).send(error);
    })
  })
  
  .put((req, res) => {
    console.log("edit parts")
    console.log(req.body)
    db_model.editWorkorderDtlParts(req.body)
    .then(response => {
      
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })
  
  .delete((req, res) => {
    console.log(req.body)
    db_model.deleteWorkorderDtlParts(req.body)
      .then(response => {
          res.status(200).send(response);
      })
      .catch(error => {
        console.log(error)
       
        res.status(500).send(error);

      })
    });
    
    workorderPrtRouter.route('/:id')
      // Work Detail Parts Materials 

      .get((req, res) => {
        console.log(req.params.id)
        db_model.getWorkorderDtlParts(req.params.id)
         
        .then(response => {
          
          res.status(200).send(response);
        })
        .catch(error => {
          console.log(error)
          res.status(500).send(error);
        })
      });


    module.exports = workorderPrtRouter;
