import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  try {
    res.setHeader("Content-Type", "text/plain");

    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      res.statusCode = 401;
      return res.end("Unauthorized");
    }

    if (req.method === "PUT") {
      res.statusCode = 200;
      return res.end("PUT Successfully processed");
    } else if (req.method === "DELETE") {
      res.statusCode = 200;
      return res.end("DELETE Successfully processed");
    } else {
      res.statusCode = 200;
      return res.end("Authorization header received");
    }
  } catch (error) {
    const errorMessage = `[${new Date().toISOString()}] ${error.message}\n`;

    fs.appendFile("errors.log", errorMessage, (err) => {
      if (err) console.error("Error writing to log:", err);
    });

    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
