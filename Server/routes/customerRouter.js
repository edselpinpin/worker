const express = require('express')
const db_model = require('../models/customer')
const customerRouter = express.Router();
// CUSTOMER 
customerRouter.route('/')
.get((req, res) => {
    db_model.getCustomers()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .post((req, res) => {
    console.log('post customer')
    console.log(req.body)
    db_model.createCustomer(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .put((req, res) => {
    console.log('edit customer')
    console.log(req.body)
    db_model.editCustomer(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  .delete((req, res) => {
    db_model.deleteCustomer(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
        console.log(error);
      })
    });
    
    module.exports = customerRouter; 
  