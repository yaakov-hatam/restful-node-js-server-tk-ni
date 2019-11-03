const DAL = require('./DAL');

const getPhone = () =>{}
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