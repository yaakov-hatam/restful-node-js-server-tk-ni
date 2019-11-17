const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const BLL = require('./layers/BLL');
const TokenBLL = require('./layers/UsersBLL');
const cors = require('cors');
const secret = 'sshhhh';
const jwt = require('jsonwebtoken');
app.listen(PORT, () => { console.log(`listening on ${PORT}`) });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('middleware');
    if (req.method === 'POST' && req.path === '/auth') {
        console.log('middleware POST AUTH');
        next();
    } else {
        try {
            let token = jwt.verify(TokenBLL.deBasic64(req.headers.authorization), secret);
            if (token) {
                console.log('verify jwt')
                next();
            }
        } catch (err) {
            res.status(403).send();
        }
    }
})
app.post('/auth', (req, res) => {
    console.log('auth')
    let { username, password } = TokenBLL.deBasic64(req.headers.authorization);
    if (!username) {
        console.log('!username');
        res.status(403).send();
    }
    else {
        //let idx = users.findIndex(user => user.username ==username && user.password == password);
        TokenBLL.getAllUsers((e, data) => {
            if (e) {
                console.log('get all users error');
                res.status(403).send();
            } else {
                let idx = data.findIndex(user => user.username == username && user.password == password);
                if (idx != -1) {
                    let token = jwt.sign({ username: username }, secret, { expiresIn: 60 * 60 });
                    res.send(token);
                } else {
                    console.log('idx is', idx, username, password);
                    res.status(403).send();
                }
            }
        })

    }
})
app.get('/phones', (req, res) => {
    console.log('phones');
    BLL.getAllPhones((e, data) => {
        if (e) { res.status(500) }
        else {
            console.log('phones res data',data);
            res.send(data);
        }
    })
})
app.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    BLL.getPhone(id, (e, data) => {
        if (e) {
            res.status(500).send();
        } else {
            res.send(data);
        }
    })
})
app.get('/delete/:id', (req, res) => {
    let id = req.params.id;
    BLL.getPhone(id, (e, data) => {
        if (e) {
            res.status(500).send();
        } else {
            res.send(data);
        }
    })
})

app.post('/delete', (req, res) => {
    let phone = req.body;
    BLL.deletePhone(phone, (e, data) => {
        if (e) {
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    })
})

app.post('/edit', (req, res) => {
    let phone = req.body;
    //BLL.UPDATEPHONE
    BLL.updatePhone(phone, (e, data) => {
        if (e) {
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    })
})

app.post('/add', (req, res) => {
    let phone = req.body;
    BLL.addPhone(phone, (e, data) => {
        if (e) {
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    })
})