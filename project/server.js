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
app.get('/edit/:id', (req,res)=>{
    let id = req.params.id;
    BLL.getPhone(id,(e,data)=>{
        if(e){
            res.status(500).send();
        }else{
           res.send(data);
        }
    })
})
app.delete('/delete', (req,res)=>{
    
})

app.post('/edit',(req,res)=>{
    //let id = req.body.id;
    //let phone = req.body;
    console.log(req.query, req.params);
    //BLL.UPDATEPHONE
})