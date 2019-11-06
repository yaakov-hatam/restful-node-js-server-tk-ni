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
const reWriteDB = (data,cb)=>{
    fs.writeFile(filePath,JSON.stringify(data), (e)=>{
        if(e){cb(e)}
        else{
            cb(null,data);
        }
    })
}

module.exports = {
    readOne: readOne,
    readAll:readAll,
    reWriteDB:reWriteDB
}