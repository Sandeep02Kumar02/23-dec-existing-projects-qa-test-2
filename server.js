/**
 * @fileoverview Minimal Express.js tutorial HTTP server. It listens on the
 * loopback interface `127.0.0.1` at port `3000` and exposes two GET endpoints
 * built with the Express web framework:
 *
 *   - GET /               -> 200, text/plain, body "Hello, World!\n"
 *   - GET /good-morning   -> 200, text/plain, body "Good morning\n"
 *
 * Express is the project's single third-party dependency; it wraps the Node.js
 * built-in `http` module and provides the routing used above. Requests to any
 * other path (or with a method that is not registered for a path) fall through
 * to Express's built-in 404 handler.
 *
 * On successful startup the process logs:
 *   "Server running at http://127.0.0.1:3000/"
 *
 * Start the server with: `node server.js` (or `npm start`).
 *
 * @module server
 */

/**
 * The Express framework factory. Calling it returns a new application instance.
 * Provided by the `express` third-party dependency declared in package.json.
 * @constant
 * @type {typeof import('express')}
 */
const express = require('express');

/**
 * The Express application instance. HTTP routes are registered on this object,
 * and it is ultimately bound to a network interface via `app.listen`.
 * @constant
 * @type {import('express').Express}
 */
const app = express();

/**
 * The server binds to the loopback interface `127.0.0.1`. Because it is a
 * loopback address, the server is reachable only from the local machine.
 * Changing it requires editing this file (no environment variable is consulted).
 * @constant
 * @type {string}
 */
const hostname = '127.0.0.1';

/**
 * The server listens on port `3000`. Hard-coded; changing it requires editing
 * this file (no environment variable is consulted).
 * @constant
 * @type {number}
 */
const port = 3000;

/**
 * Root endpoint handler. Responds to `GET /` with the original tutorial
 * greeting, preserving the response contract of the pre-Express implementation
 * (status 200, Content-Type text/plain, body "Hello, World!\n").
 *
 * @param {import('express').Request} req - Inbound request object (not inspected).
 * @param {import('express').Response} res - Outbound response; set to status 200
 *   with a `text/plain` Content-Type and ended with the body "Hello, World!\n".
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.status(200).type('text/plain').send('Hello, World!\n');
});

/**
 * "Good morning" endpoint handler. Responds to `GET /good-morning` with a
 * plain-text morning greeting.
 *
 * @param {import('express').Request} req - Inbound request object (not inspected).
 * @param {import('express').Response} res - Outbound response; set to status 200
 *   with a `text/plain` Content-Type and ended with the body "Good morning\n".
 * @returns {void}
 */
app.get('/good-morning', (req, res) => {
  res.status(200).type('text/plain').send('Good morning\n');
});

/**
 * Bind the Express application to `127.0.0.1:3000` and begin accepting
 * connections. The startup callback runs once the server is listening and logs
 * the server URL.
 *
 * @returns {void}
 */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
