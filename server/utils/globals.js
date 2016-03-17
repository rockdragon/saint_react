var scope = {
    debug : require('debug')('server')
};
module.exports = scope;

Object.assign(global, scope);