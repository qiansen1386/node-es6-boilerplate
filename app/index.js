// import fp from 'lodash/fp';
// import fs from 'fs';
import nconf from 'nconf';
import express from 'express';

nconf.file('../config.json'); // NOT TESTED!!
const app = express();
const PORT = nconf.get('server.port') || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ping', (req, res) => res.status(200).send('pong'));

app.listen(PORT, () => console.log(`app is listening at port ${PORT}`));
