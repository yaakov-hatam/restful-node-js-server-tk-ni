const DAL = require('./DAL')('./db/users.json');
const atob = require('atob');
const getAllUsers = (cb)=>{
        DAL.readAll((e,data)=>{
            if(e){cb(e)}
            else{
                cb(null,data);
            }
        })
}
// const validate = (username,password, cb) => {
//         let users;
//         DAL.readAll((e,data)=>{
//             if(e){cb(e)}
//             else{
//                 users = data;
//             }
//         })
// }

const deBasic64 = (token) => {
    const authHeader = token.split(" ");
    if (authHeader[0] === "basic") {
        return {
            username: atob(authHeader[1]).split(':')[0],
            password: atob(authHeader[1]).split(':')[1]
        }
    } else if (authHeader[0] === 'bearer') {
        return authHeader[1];
    }
}

module.exports = {
    // validate: validate,
    deBasic64: deBasic64,
    getAllUsers: getAllUsers
}