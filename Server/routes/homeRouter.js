const express = require('express')
const db_model = require('../models/home')
const home = express();

   home.get('/workorderdue', (req, res) => {
    db_model.getWorkordersdue()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  home.get('/workordertoday', (req, res) => {
    db_model.getWorkorderstoday()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  home.get('/workordercust/:custid', (req, res) => {
    db_model.getWorkorderCust(req.params.custid)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  home.get('/techload', (req, res) => {
    db_model.gettechload()
    .then(response => {
      res.status(200).send(response);
      
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  module.exports = home;