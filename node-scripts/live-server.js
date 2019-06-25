const liveServer = require('live-server');
const path = require('path');
addCustomMimeTypes = function(req, res, next) {

  if (req.url !== '/' && path.extname(req.url) === '.js') {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/javascript');
    res.end();
  } else {
    next();
  }
};

const params = {
  port: 8181, // Set the server port. Defaults to 8080.
  host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
  root: 'dist/curso-profesional-angular-laravel-frontend-es/', // Set root directory that's being served. Defaults to cwd.
  open: false, // When false, it won't load your browser by default.
  // ignore: 'scss,my/templates', // comma-separated string for paths to ignore
  file: 'index.html', // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  // mount: [['/components', './node_modules']], // Mount a directory to a route.
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
  middleware: [addCustomMimeTypes], // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};

liveServer.start(params);
