const fs = require('fs');
const filePath = './db/phones.json';
const readOne = (id,cb) =>{
    fs.readFile(filePath,(e,data)=>{
        if(e){cb(e)}
        else{
            let phones = JSON.parse(data.toString());
            phones = phones.filter(phone =>{
                return phone.id == id;
            })
            if(phones.length > 0){
                cb(null,phones[0]);
            }else{
                cb('Phone Not Found');
            }
          
        }
    })
}
const readAll = (cb) =>{
    fs.readFile(filePath,(e,data)=>{
        if(e){cb(e)}
        else{
            cb(null,JSON.parse(data.toString()));
        }
    })
}
const deleteOne = ()=>{}
const reWriteDB = ()=>{}
const updateOne = ()=>{}
const saveOne = () =>{}
module.exports = {
    readOne: readOne,
    readAll:readAll,
    deleteOne:deleteOne,
    reWriteDB:reWriteDB,
    updateOne:updateOne,
    saveOne: saveOne
}