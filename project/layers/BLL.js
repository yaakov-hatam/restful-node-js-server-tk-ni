const DAL = require('./DAL');

const getPhone = (id,cb) =>{
    DAL.readOne(id,(e,data)=>{
        if(e){cb(e)}
        else{
            cb(null,data);
        }
    })
}
const getAllPhones = (cb)=>{
    DAL.readAll((e,data)=>{
        if(e){cb(e)}
        else{
            cb(null,data);
        }
    })
}
const updatePhone = () =>{}
const deletePhone = () =>{}
const addPhone = () =>{}

module.exports = {
    getPhone: getPhone,
    getAllPhones: getAllPhones,
    updatePhone: updatePhone,
    deletePhone: deletePhone,
    addPhone: addPhone
}