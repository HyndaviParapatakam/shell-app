import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppServer from "./AppServer";

const app = express();
const PORT = 4000;

app.use(express.static("dist"));
app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

app.get("/{*any}", (req, res) => {
  const html = ReactDOMServer.renderToString(<AppServer location={req.url} />);
  console.log("SSR Output:\n", html);
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>SSR Shell</title></head>
      <body>
        <div id="root">${html}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);

});

app.listen(PORT, () => {
  console.log("SSR server running on http://localhost:4000");
});
