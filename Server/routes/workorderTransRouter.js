const express = require('express')
const db_model = require('../models/workorderTrans')
const wotrans= express();
wotrans.put('/checkInTech', (req, res) => {
    db_model.checkInTech(req.body)
    .then(response => {
      console.log(req.body)
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })  

  wotrans.put('/checkOutTech', (req, res) => {
    db_model.checkOutTech(req.body)
    .then(response => {
     
      res.status(200).send(response);
    })
    .catch(error => {
    
      res.status(500).send(error);
    })
  }) 

  wotrans.put('/complete', (req, res) => {
      
    
    db_model.completeWorkorder(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })

  wotrans.put('/close', (req, res) => {
      
    
    db_model.closeWorkorder(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })

  module.exports = wotrans;
