const fs = require('fs');

function getContentType(path) {

    if (path.endsWith('css')) {
        return 'text/css';
    }

    if (path.endsWith('ico')) {
        return 'image/x-icon';
    }

    if (path.endsWith('jpg')) {
        return 'image/jpeg';
    }

    if (path.endsWith('png')) {
        return 'image/png';
    }
}

module.exports = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    if (pathname.startsWith('/content') && req.method === 'GET') {

        fs.readFile(`./${pathname}`, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, {
                    'Content-Type': 'text/plain'
                });

                res.write('Error Was Found!');
                res.end();
                return;
            }
            
            res.writeHead(200, {
                'Content-Type': `${getContentType(pathname)}`
            });

            res.write(data);
            res.end();
        });

    } else {
        return true;
    }
}