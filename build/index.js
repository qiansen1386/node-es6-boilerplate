'use strict';

var _nconf = require('nconf');

var _nconf2 = _interopRequireDefault(_nconf);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fp from 'lodash/fp';
// import fs from 'fs';
_nconf2.default.file('../config.json');
var app = (0, _express2.default)();
var PORT = _nconf2.default.get('server.port') || 3000;

app.get('/ping', function (req, res) {
  return res.send(200, 'pong');
});

app.listen(PORT, function () {
  return console.log('app is listening at port ' + PORT);
});
//# sourceMappingURL=index.js.map