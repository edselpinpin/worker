const express = require('express')
const app = express()
const port = 3001

const db_model = require('./models/db_model');
const customerRouter = require('./routes/customerRouter');
const settingsRouter = require('./routes/settingRouter');
const serviceRouter = require('./routes/serviceRouter');
const techRouter = require('./routes/techRouter');
const workorderRouter = require('./routes/workorderRouter');
const workorderSrvRouter = require('./routes/workorderSrvRouter');
const workorderPrtRouter = require('./routes/workorderPrtRouter');
const homeRouter = require('./routes/homeRouter');
const wocheckIORouter = require('./routes/workorderTransRouter');
const woTransRouter = require('./routes/workorderTransRouter');

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)

})

app.use('/syssettings', settingsRouter);
app.use('/customer', customerRouter);
app.use('/service', serviceRouter);
app.use('/tech', techRouter);
app.use('/workorder', workorderRouter);
app.use('/workorderdtl', workorderSrvRouter);
app.use('/workorderdtlparts', workorderPrtRouter);
app.use('/home', homeRouter);
app.use('/workordertrans', woTransRouter);


   

   

  
  
  

 
  
  
  

    
    



  
  
     


    
