const fs = require('fs');
let _fileName;
const readOne = (id,cb) =>{
    fs.readFile(_fileName,(e,data)=>{
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
    fs.readFile(_fileName,(e,data)=>{
        if(e){cb(e)}
        else{
            cb(null,JSON.parse(data.toString()));
        }
    })
}
const reWriteDB = (data,cb)=>{
    fs.writeFile(_fileName,JSON.stringify(data), (e)=>{
        if(e){cb(e)}
        else{
            cb(null,data);
        }
    })
}

const dalModule = (fileName) =>{
    _fileName = fileName;
    return{
        readOne:readOne,
        readAll:readAll,
        reWriteDB: reWriteDB
    }
}

module.exports = dalModule;