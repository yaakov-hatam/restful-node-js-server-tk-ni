const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const BLL = require('./layers/BLL');
const cors = require('cors');
app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
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
app.get('/delete/:id', (req,res)=>{
    let id = req.params.id;
    BLL.getPhone(id,(e,data)=>{
        if(e){
            res.status(500).send();
        }else{
           res.send(data);
        }
    })
})

app.post('/delete', (req,res)=>{
    let phone = req.body;
    BLL.deletePhone(phone,(e,data)=>{
        if(e){
            res.status(500).send();
        }else{
            res.status(200).send();
        }
    })
})

app.post('/edit',(req,res)=>{
    let phone = req.body;
    //BLL.UPDATEPHONE
    BLL.updatePhone(phone,(e,data)=>{
        if(e){
            res.status(500).send();
        }else{
            res.status(200).send();
        }
    })
})

app.post('/add', (req,res)=>{
    let phone = req.body;
    BLL.addPhone(phone,(e,data)=>{
        if(e){
            res.status(500).send();
        }else{
            res.status(200).send();
        }
    })
})