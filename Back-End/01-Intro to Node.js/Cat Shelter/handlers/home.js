const fs = require('fs');
const path = require('path');
const cats = require('../data/cats.json');

module.exports = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    if (pathname === '/' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const readStream = fs.createReadStream(filePath);

        const catsPath = path.normalize(
            path.join(__dirname, '../data/cats.json')
        );

        let tempData = '';
        readStream.on('data', (data) => {
            tempData += data;
        });

        readStream.on('end', () => {
            fs.readFile(catsPath, (err, catsData) => {
                if (err) throw err;
                let catsDataParsed = JSON.parse(catsData);

                let catsPlaceholder = catsDataParsed.map(cat => 
                    `<li>
                        <img src="content/images/${cat.image}" alt="${cat.name}">
                        <h3>${cat.name}</h3>
                        <p><span>Breed: </span>${cat.breed}</p>
                        <p><span>Description: </span>${cat.description}</p>
                        <ul class="buttons">
                            <li class="btn edit"><a href="/cats-edit/${cat.id}">Change Info</a></li>
                            <li class="btn delete"><a href="/cats-find-new-home/${cat.id}">New Home</a></li>
                        </ul>
                    </li>`
                );
                let modifiedData = tempData.toString().replace('{{cats}}', catsPlaceholder);
                res.write(modifiedData);
                res.end();
            });
        });

        readStream.on('error', (err) => {
            console.error(err);
        });

    } else {
        return true;
    }
}