const http = require("http");
const os = require("node:os");
const path = require("path");
const greeting = require("./personalmodule");
const PORT = 4000;

const server = http.createServer((req, res) => {
  const userName = os.userInfo().username;

  res.end(`
    <h1>Task - 1</h1>
    <h3>System Information</h3>
    <p>Current user name: ${userName}</p>
    <p>OS type: ${os.type()}</p>
    <p>System work time: ${os.uptime()} minutes</p>
    <p>Current work directory: ${__dirname}</p>
    <p>Server file name: ${path.basename(__filename)}</p>
    <br />

    <h1>Task - 2</h1>
    ${greeting(userName)}
`);
});

server.listen(PORT, () => {
  console.log(`listening for requests on port ${PORT}`);
});
