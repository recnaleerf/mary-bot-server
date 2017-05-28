const express = require("express");
const WebSocket = require("ws");
//const WebSocketWrapper = require("./lib/WebSocketWrapper");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const errHandler = console.error.bind(console);

wss.on("connection", function(ws) {
  /*
  var wsw = new WebSocketWrapper(ws);
  wsw.send("dom/query", ".prt-list-contents").then(function(data) {
    console.log(data);
  }, errHandler);
  */
});

module.exports = function(port, host) {
  server.listen(port, host || "localhost", function() {
    console.log("Mary Bot server listening on port " + port);
  });
};
