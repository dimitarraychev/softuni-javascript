const util = require('util');
const jwt = require('jsonwebtoken');

/**
 * Promisify jwt.sign function
 * @type {(payload: string | Buffer | object, secretOrPrivateKey: jwt.Secret, options?: jwt.SignOptions) => Promise<string>}
 */
exports.sign = util.promisify(jwt.sign);

/**
 * Promisify jwt.verify function
 * @type {(token: string, secretOrPublicKey: jwt.Secret, options?: jwt.VerifyOptions) => Promise<object | string>}
 */
exports.verify = util.promisify(jwt.verify);
