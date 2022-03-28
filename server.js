const
  http = require("http"),
  fs = require("fs").promises;

const server = http.createServer(async (req, res) => {
    const url = req.url;

    if (url == "/") {
        const data = await fs.readFile("./views/home.html", "utf-8");
        res.writeHead(200, "ok", {"content-type": "text/html"});
        res.end(data);
    } else if (url == "/contact") {
        const data = await fs.readFile("./views/contact.html", "utf-8");
        res.writeHead(200, "ok", {"content-type": "text/html"});
        res.end(data);
    } else if (url == "/about"){
        const data = await fs.readFile("./views/about.html", "utf-8");
        res.writeHead(200, "ok", {"content-type": "text/html"});
        res.end(data);
    } else if (url == "/home") {
        const data = await fs.readFile("./views/home.html", "utf-8");
        res.writeHead(302, "redirect", {
        location: "/",
        "content-type": "text/html",
    });
        res.end();
    }
});
server.listen(3000, function(){
    console.log("server is running on port 3000")
});


