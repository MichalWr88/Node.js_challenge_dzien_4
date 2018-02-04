const http = require('http'),
    fs = require('fs');

// const srv = http.createServer((req, res) => {
//      const acceptLanguage = req.headers['accept-language'],
//      		userAgent = req.headers["user-agent"];

//     // console.log('Preferowane języki:', acceptLanguage);
//     // console.log('Przegladarka ', userAgent);
//     // 


//      res.setHeader("Content-Type", "text/html; charset=utf-8");
//      res.end(`<h1>${userAgent}</h1>`);

// });

// srv.listen(3000, () => {
//     console.log('Serwer uruchomiony na porcie 3000');
// });


const srv = http.createServer((req, res) => {
    const acceptLanguage = req.headers['accept-language'],
        userAgent = req.headers["user-agent"];

    fs.readFile(__dirname + "/public/index.html", function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
        res.write(data);
        res.end();
    });

    // res.setHeader("Content-Type", "text/html; charset=utf-8");
    // res.end(`<h1>${userAgent}</h1>`);

});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});