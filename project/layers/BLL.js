const DAL = require('./DAL');

const getPhone = (id, cb) => {
    DAL.readOne(id, (e, data) => {
        if (e) { cb(e) }
        else {
            cb(null, data);
        }
    })
}
const getAllPhones = (cb) => {
    DAL.readAll((e, data) => {
        if (e) { cb(e) }
        else {
            cb(null, data);
        }
    })
}
const updatePhone = (obj, cb) => {
    let phones;
    DAL.readAll((e, data) => {
        if (e) { cb(e) }
        else {
            phones = data;
            if (phones.length > 0) {
                for (let i = 0; i < phones.length; i++) {
                    if (phones[i].id == obj.id) {
                        phones[i] = obj;
                    }
                }
            }

            DAL.reWriteDB(phones, (e, data) => {
                if (e) { cb(e) }
                else {
                    cb(null, data);
                }
            })
        }
    })

}
const deletePhone = (obj, cb) => {
    let phones;
    DAL.readAll((e, data) => {
        if (e) { cb(e) }
        else {
            phones = data;
            if (phones.length > 0) {
                for (let i = 0; i < phones.length; i++) {
                    if (phones[i].id == obj.id) {
                        phones.splice(i, 1);
                    }
                }
            }

            DAL.reWriteDB(phones, (e, data) => {
                if (e) { cb(e) }
                else {
                    cb(null, data);
                }
            })
        }
    })
}
const addPhone = (obj, cb) => {
    let phones;
    DAL.readAll((e, data) => {
        if (e) { cb(e) }
        else {
            phones = data;
            phones.push(obj);
            DAL.reWriteDB(phones, (e, data) => {
                if (e) { cb(e) }
                else {
                    cb(null, data);
                }
            })
        }
    })
}

module.exports = {
    getPhone: getPhone,
    getAllPhones: getAllPhones,
    updatePhone: updatePhone,
    deletePhone: deletePhone,
    addPhone: addPhone
}