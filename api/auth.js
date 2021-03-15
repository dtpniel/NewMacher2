const db = require('./db');
const jwt = require('jsonwebtoken');
const config = require('./settings');
const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');
const middleware = require('./middleware');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

function jwtSignUser(user) {
    const ONE_YEAR = 60 * 60 * 24 * 365
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_YEAR
    })
}

router.post('/auth/user/register', function (req, res) {
    var user = req.body["user"];

    // query to the database and get the data
    db.execProcedure('register', user).then(data => {
            res.send(data.data.recordset[0])
        },
        error => console.log(error)
    )
});

router.post('/auth/user/login', function (req, res) {

    try {
        var user = req.body["user"];
        // query to the database and get the data
        db.execProcedure('login', user).then(data => {
                if (data.error) {
                    console.log(data.error)
                    res.status(403).send("Error login!")
                    return;
                }

                if (data.data.recordset.length == 0) {
                    console.log(data.error)
                    res.status(403).send("Incorrect password!")
                    return;
                }


                var user = data.data.recordset[0];
                var token = jwtSignUser(user);
                res.send({
                    token: {
                        accessToken: token
                    }
                });
            },
            error => res.status(403).send({error: error})
        )
    } catch (error) {
        res.status(403).send({error: error})
    }
});

router.get('/auth/user/user', middleware.checkToken, function (req, res) {
    var user = req.decoded;
    res.send(user);
    // query to the database and get the data
    // db.execProcedure('getUser', user).then(data => {
    //     res.send(data)
    // },
    //     res.status(403).send({
    //         error: `The login information was incorrect.`
    //     })
    // )
});

router.post('/auth/user/me', function (req, res) {
    const email = req.body["email"];
    const socialLogin = req.body["socialLogin"];

    db.execProcedure("profile", {email, socialLogin})
        .then(data => {
            res.send(data);
        },
        error => console.log(error)
    );
});

module.exports = router;
