let http = require('http');
let static = require('node-static');
let file = new static.Server('.', {
  cash: 0
});

function accept(req, res) {
  if (req.url.startsWith('/data/')) {
    setTimeout(() => {
      file.serve(req, res);
    }, 200);
  } else {
    req.url = '/public' + req.url;

    file.serve(req, res);
  }
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');
