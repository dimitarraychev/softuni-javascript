const util = require('util');
const jwt = require('jsonwebtoken');

function sign(payload, secretOrPrivateKey, options) {

    const promise = new Promise((res, rej) => {
        jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
            if (err) return rej(err);

            res(token);
        });
    });

    return promise;
}

const verify = util.promisify(jwt.verify);

module.exports = {
    sign,
    verify
};