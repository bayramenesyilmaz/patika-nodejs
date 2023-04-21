const http = require('http');

const server = http.createServer((req, res) => {

    console.log("Bir istek oluşturuldu");

    const url = req.url;


    if (url === "/") {

        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h4>Index Sayfası</h4>");

    } else if (url === "/About") {

        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h4>About Sayfası</h4>");

    } else if (url === "/Contact") {

        res.writeHead(200, { "Content-Type": "text/html" })
        res.write("<h4>Contact Sayfası</h4>");

    } else {

        res.writeHead(404, { "Content-Type": "text/html" })
        res.write("<h4>Sayfa Bulunamadı</h4>");

    }


    res.end();

});

const port = 3000;

server.listen(port, () => {
    console.log(`${port} portu dinleniyor...`);
})