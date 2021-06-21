const https = require ('http');
const app  = require('./app');

app.set('port', process.env.PORT || 3005);
const server = https.createServer(app);

server.listen(process.env.PORT || 3005);