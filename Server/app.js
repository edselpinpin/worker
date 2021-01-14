const express = require('express')
const app = express()
const port = 3001

const db_model = require('./db_model')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// CUSTOMER 
app.get('/customer', (req, res) => {
  db_model.getCustomers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.post('/customer', (req, res) => {
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

app.put('/customer', (req, res) => {
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

app.delete('/customer', (req, res) => {
  db_model.deleteCustomer(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  

  // SERVICE 

  app.get('/service', (req, res) => {
    db_model.getServices()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.post('/service', (req, res) => {
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

  app.put('/editservice', (req, res) => {
    db_model.editService(req.body)
    
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
      
    })
  })

  app.delete('/service', (req, res) => {
    db_model.deleteService(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })


  // TECHNICIAN 

  app.get('/tech', (req, res) => {
    db_model.getTech()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.post('/tech', (req, res) => {
    db_model.createTech(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.put('/edittech', (req, res) => {
    db_model.editTech(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.delete('/tech', (req, res) => {
    db_model.deleteTech(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    })

    app.listen(port, () => {
      console.log(`App running on port ${port}.`)
    })

    /* Work Order */

    app.get('/workorder', (req, res) => {
      db_model.getWorkorders()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    })
    
    app.post('/workorder', (req, res) => {
     
     
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
    
    app.put('/workorder', (req, res) => {
      
     
      db_model.editWorkorder(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    })
    
    app.delete('/workorder', (req, res) => {
      db_model.deleteWorkorder(req.body)
        .then(response => {
          res.status(200).send(response);
        })
        .catch(error => {
          res.status(500).send(error);
        })
      })

   // Work Order Transactions 
   app.put('/checkInTech', (req, res) => {
      
   
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
  
  app.put('/reassigntech', (req, res) => {
      
   
    db_model.reassignTech(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })

  app.put('/complete', (req, res) => {
      
    
    db_model.completeWorkorder(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })

  // Work Order Detail 

  app.get('/workorderdtl/:id', (req, res) => {
    db_model.getWorkorderDtl(req.params.id)
    
    .then(response => {
      console.log(req.params.id)
     
      res.status(200).send(response);
    })
    .catch(error => {
      console.log(error)
      res.status(500).send(error);
    })
  })
  
  app.post('/workorderdtl', (req, res) => {
   
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
  
  app.put('/workorderdtl', (req, res) => {
    
    console.log(req.body)
    db_model.editWorkorderDtl(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.delete('/workorderdtl', (req, res) => {
    db_model.deleteWorkorderDtl(req.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
    })



  
  
     


    
