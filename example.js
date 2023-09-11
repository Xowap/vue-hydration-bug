import express from "express";
import { renderToString } from "vue/server-renderer";
import { createApp } from "./app.js";

const server = express();

server.use(express.static("."));

server.get("/", (req, res) => {
    const app = createApp();

    renderToString(app).then((html) => {
        res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue 3 SSR</title>
    <script type="importmap">
    {
        "imports": {
            "vue": "/node_modules/vue/dist/vue.esm-browser.prod.js"
        }
    }
    </script>
    <script type="module" src="/client.js"></script>
</head>
<body>
    <div id="app">${html}</div>
</body>
</html>`);
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});
