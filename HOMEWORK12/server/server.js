const http = require("http");
const fs = require("fs");
const path = require("path");
const { getDateTime } = require("./personalmodule");
const PORT = 4000;

const writeHead = ({ res, status = 200, contentType = "text/plain" }) =>
  res.writeHead(status, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": contentType,
  });

const handleVote = (req, res) => {
  writeHead({ res });
  res.end(`Your vote is accepted: ${getDateTime()}`);
};

const handleBooks = async (req, res) => {
  const books = await fs.readFileSync("./books.json", "utf-8");

  writeHead({ res, contentType: "application/json" });
  res.end(books);
};

const handleRoutes = (req, res) => {
  switch (req.url) {
    case "/vote":
      handleVote(req, res);
      break;
    case "/books":
      handleBooks(req, res);
      break;
    default:
      writeHead({ res, status: 404 });
      res.end();
      break;
  }
};

const server = http.createServer((req, res) => {
  handleRoutes(req, res);
});

server.listen(PORT, () => {
  console.log(`listening for requests on port ${PORT}`);
});
