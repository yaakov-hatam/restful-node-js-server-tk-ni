const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const BLL = require('./layers/BLL');
const cors = require('cors');
app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)});
app.use(cors());

app.get('/phones',(req,res)=>{
   BLL.getAllPhones((e,data)=>{
       if(e){res.status(500)}
       else{
           res.send(data);
       }
   })
})

app.post('/phones',(req,res)=>{

})

app.put('/phones',(req,res)=>{

})

app.delete('/phones', (req,res)=>{
    
})