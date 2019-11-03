const fs = require('fs');
const filePath = './db/phones.json';
const readOne = () =>{}
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