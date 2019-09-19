var fs = require('fs');
var http = require('http');
var path = require('path');

//parse options
var args = process.argv.slice(2);
var dir = path.resolve('.');
var opt = {
    port: '8080',
    openBrowser: false,
    startPage: 'index.html'
};
for (var i = 0; i < args.length; i++) {
    if (args[i] == '-p')
        opt.port = i < args.length - 1 ? args[i + 1] : opt.port;
    else if (args[i] == '-o')
        opt.openBrowser = true;
    else if (args[i] == '-i')
        opt.startPage = i < args.length - 1 ? args[i + 1] : opt.startPage;
    else if (i == 0)
        dir = path.resolve(args[i]);
}
console.log(`options: path=${dir}, port=${opt.port}, openBrowser=${opt.openBrowser}, startPage=${opt.startPage}`);

//start listen
var server = http.createServer((req, res) => {
    var file = req.url;
    console.log(`request: ${file}`);

    if (file == null || file == '/' || file == '\\')
        file = path.join(dir, opt.startPage);
    else
        file = path.join(dir, file);

    var stream = fs.createReadStream(file);
    stream.on('error', (err) => {
        console.log(`can not find or open file: ${file}, ${err}`);
        res.writeHead(404, 'Not found');
        res.end();
    })
    stream.pipe(res);
});

server.listen(opt.port, (err) => {
    if (err)
        return console.log(`can not start listening on port: ${opt.port}, ${err}`);

    console.log(`start listening port: ${opt.port}`);
});

if (opt.startPage) {
    var url = `http://localhost:${opt.port}`;
    var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
    require('child_process').exec(start + ' ' + url);
}
