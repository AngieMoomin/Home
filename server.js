//Install express server
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory

app.use(express.static(path.join(__dirname, 'dist/volets-web-store')));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, '/dist/volets-web-store/index.html'));
});

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));
// Start the app by listening on the default Heroku port
//app.listen(process.env.PORT || 8080);
