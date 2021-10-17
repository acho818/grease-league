// app.js
const express = require("express")
const path = require('path')

const app = express();
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.get("/impeachjeff", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/impeach-jeff.html'))
});

app.listen(3000, () => {
  console.log('Listening on port ' + 3000);
});

// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Impeach Jeff!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



