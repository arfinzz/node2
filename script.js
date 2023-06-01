const http=require('http');
const routefun = require('./routes');

const server=http.createServer(routefun)
server.listen(3000);