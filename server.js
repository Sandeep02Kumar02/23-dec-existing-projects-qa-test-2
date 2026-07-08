/**
 * @fileoverview Minimal single-file Node.js HTTP server. It listens on the
 * loopback interface 127.0.0.1 at port 3000 and responds to EVERY request —
 * regardless of HTTP method or URL path — with an identical plain-text
 * "Hello, World!" message. The server has no routing, middleware, environment
 * configuration, or third-party dependencies; it uses only the Node.js
 * built-in `http` module.
 *
 * Response contract (identical for all requests):
 *   - Status:  200 OK
 *   - Header:  Content-Type: text/plain
 *   - Body:    "Hello, World!\n"
 *
 * On successful startup the process logs:
 *   "Server running at http://127.0.0.1:3000/"
 *
 * Start the server with: node server.js
 *
 * @module server
 */

/**
 * Node.js built-in HTTP module, used to create the server instance.
 * @constant
 * @type {typeof import('http')}
 */
const http = require('http');

/**
 * Loopback host interface the server binds to. Because it is 127.0.0.1, the
 * server is reachable only from the local machine. Changing it requires editing
 * this file (no environment variable is consulted).
 * @constant
 * @type {string}
 */
const hostname = '127.0.0.1';

/**
 * TCP port the server listens on. Hard-coded; changing it requires editing this
 * file (no environment variable is consulted).
 * @constant
 * @type {number}
 */
const port = 3000;

/**
 * The HTTP server instance. Every request is served by the handler passed to
 * http.createServer below.
 * @constant
 * @type {http.Server}
 */
const server = http.createServer(
  /**
   * HTTP request handler. Sends the same response to every request,
   * irrespective of method, path, headers, or body.
   *
   * @param {http.IncomingMessage} req - Inbound request object (not inspected).
   * @param {http.ServerResponse} res - Outbound response; set to status 200 with
   *   a text/plain Content-Type and ended with the body "Hello, World!\n".
   * @returns {void}
   */
  (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }
);

/**
 * Startup callback invoked once the server is listening; logs the server URL.
 * @returns {void}
 */
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
