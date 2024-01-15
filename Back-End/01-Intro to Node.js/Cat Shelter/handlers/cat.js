const fs = require('fs');
const path = require('path');
const qs = require('qs');
const formidable = require('formidable');
// const cats = require('../data/cats.json');
// const breeds = require('../data/breeds.json');

const breedsPath = path.normalize(
    path.join(__dirname, '../data/breeds.json')
);

const catsPath = path.normalize(
    path.join(__dirname, '../data/cats.json')
);

module.exports = (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    if (pathname === '/cats/add-cat' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/addCat.html')
        );

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const readStream = fs.createReadStream(filePath, 'utf-8');

        let tempData = '';
        readStream.on('data', (chunk) => {
            tempData += chunk;
        });

        readStream.on('end', () => {
            fs.readFile(breedsPath, (err, breedsData) => {
                if (err) throw err;
                let breedsDataParsed = JSON.parse(breedsData);
                let breedsPlaceholder = breedsDataParsed.map(breed => `<option value='${breed}'>${breed}</option>`);
                let modifiedData = tempData.toString().replace('{{catBreeds}}', breedsPlaceholder);
                res.write(modifiedData);
                res.end();
            });
        });

        readStream.on('error', (err) => {
            console.error(err);
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/addBreed.html')
        );

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const readStream = fs.createReadStream(filePath, 'utf-8');

        let data = '';
        readStream.on('data', (chunk) => {
            data += chunk;
        });

        readStream.on('end', () => {
            res.write(data);
            res.end();
        });

        readStream.on('error', (err) => {
            console.error(err);
        });

    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {

        let formData = '';
        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {

            let body = qs.parse(formData);

            fs.readFile(breedsPath, (err, data) => {
                if (err) throw err;

                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);

                fs.writeFile(breedsPath, json, (err, data) => {
                    if (err) throw err;
                    console.log('The breed has been added successfully!')
                });

                res.writeHead(302, {
                    location: '/'
                });
                res.end();
            });
        });

    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {

        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            //Handle the file upload field
            const uploadedFile = files.upload[0];
            const oldPath = uploadedFile.filepath;
            const newPath = path.normalize(
                path.join(__dirname, '../content/images/' + uploadedFile.originalFilename)
            );

            const readStream = fs.createReadStream(oldPath);
            const writeStream = fs.createWriteStream(newPath);

            readStream.on('error', (err) => {
                console.error('Error reading file:', err);
                throw err;
            });

            writeStream.on('error', (err) => {
                console.error('Error writing file:', err);
                throw err;
            });

            writeStream.on('finish', () => {
                //Remove the original file
                fs.unlink(oldPath, (err) => {
                    if (err) {
                        console.error('Error deleting original file:', err);
                        throw err;
                    } else {
                        console.log('File uploaded and moved successfully');
                    }
                });
            });

            readStream.pipe(writeStream);

            //Handle the other inputs of the form
            fs.readFile(catsPath, (err, data) => {
                if (err) throw err;

                let cats = JSON.parse(data);
                cats.push({
                    id: cats.length + 1, name: fields.name[0], description: fields.description[0],
                    breed: fields.breed[0], image: uploadedFile.originalFilename
                });
                let json = JSON.stringify(cats);

                fs.writeFile(catsPath, json, (err, data) => {
                    if (err) throw err;
                    console.log('The cat has been added successfully!')
                });

                res.writeHead(302, {
                    location: '/'
                });
                res.end();
            });
        });

    } else if (pathname.includes('/cats-edit') && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/editCat.html')
        );

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const catID = pathname.split('/')[2];

        const readStream = fs.createReadStream(filePath, 'utf-8');

        let tempData = '';
        readStream.on('data', (chunk) => {
            tempData += chunk;
        });

        readStream.on('end', () => {
            fs.readFile(breedsPath, (err, breedsData) => {
                if (err) throw err;

                let breedsDataParsed = JSON.parse(breedsData);
                let breedsPlaceholder = breedsDataParsed.map(breed => `<option value='${breed}'>${breed}</option>`);

                tempData = tempData.toString().replace('{{catBreeds}}', breedsPlaceholder);

                fs.readFile(catsPath, (err, data) => {
                    if (err) throw err;

                    let catsDataParsed = JSON.parse(data);
                    let currentCat = catsDataParsed.filter(el => el.id == catID)[0];

                    tempData = tempData.toString().replace('{{id}}', catID);
                    tempData = tempData.toString().replace('{{name}}', currentCat.name);
                    tempData = tempData.toString().replace('{{description}}', currentCat.description);

                    res.write(tempData);
                    res.end();
                });
            });
        });

        readStream.on('error', (err) => {
            console.error(err);
        });

    } else if (pathname.includes('/cats-find-new-home') && req.method === 'GET') {

        const filePath = path.normalize(
            path.join(__dirname, '../views/catShelter.html')
        );

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        const catID = pathname.split('/')[2];
        const readStream = fs.createReadStream(filePath, 'utf-8');

        let tempData = '';
        readStream.on('data', (chunk) => {
            tempData += chunk;
        });

        readStream.on('end', () => {
            fs.readFile(catsPath, (err, data) => {
                if (err) throw err;

                let catsDataParsed = JSON.parse(data);
                let currentCat = catsDataParsed.filter(el => el.id == catID)[0];

                tempData = tempData.toString().replace('{{id}}', catID);
                tempData = tempData.toString().replaceAll('{{name}}', currentCat.name);
                tempData = tempData.toString().replace('{{description}}', currentCat.description);
                tempData = tempData.toString().replace('{{image}}', currentCat.image);
                tempData = tempData.toString().replaceAll('{{breed}}', currentCat.breed);

                res.write(tempData);
                res.end();
            });
        });

        readStream.on('error', (err) => {
            console.error(err);
        });

    } else if (pathname.includes('/cats-edit') && req.method === 'POST') {

        const catID = pathname.split('/')[2];
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) throw err;

            //Handle the file upload field
            const uploadedFile = files.upload[0];
            const oldPath = uploadedFile.filepath;
            const newPath = path.normalize(
                path.join(__dirname, '../content/images/' + uploadedFile.originalFilename)
            );

            const readStream = fs.createReadStream(oldPath);
            const writeStream = fs.createWriteStream(newPath);

            readStream.on('error', (err) => {
                console.error('Error reading file:', err);
                throw err;
            });

            writeStream.on('error', (err) => {
                console.error('Error writing file:', err);
                throw err;
            });

            writeStream.on('finish', () => {
                //Remove the original file
                fs.unlink(oldPath, (err) => {
                    if (err) {
                        console.error('Error deleting original file:', err);
                        throw err;
                    } else {
                        console.log('File uploaded and moved successfully');
                    }
                });
            });

            readStream.pipe(writeStream);

            //Handle the other inputs of the form
            fs.readFile(catsPath, (err, data) => {
                if (err) throw err;

                let cats = JSON.parse(data);
                let filteredCats = cats.filter(el => el.id != catID);
                filteredCats.push({
                    id: catID, name: fields.name[0], description: fields.description[0],
                    breed: fields.breed[0], image: uploadedFile.originalFilename
                });
                let json = JSON.stringify(filteredCats);

                fs.writeFile(catsPath, json, (err, data) => {
                    if (err) throw err;
                    console.log('The cat has been edited successfully!')
                });

                res.writeHead(302, {
                    location: '/'
                });
                res.end();
            });
        });

    } else if (pathname.includes('/cats-find-new-home') && req.method === 'POST') {

        const catID = pathname.split('/')[2];

        fs.readFile(catsPath, (err, data) => {
            if (err) throw err;

            let cats = JSON.parse(data);
            let filteredCats = cats.filter(el => el.id != catID);
            let json = JSON.stringify(filteredCats);

            fs.writeFile(catsPath, json, (err, data) => {
                if (err) throw err;
                console.log('The cat has been sheltered successfully!')
            });

            res.writeHead(302, {
                location: '/'
            });
            res.end();
        });

    } else if (pathname.includes('/search') && req.method === 'POST') {

        let formData = '';
        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {

            const body = qs.parse(formData);
            const query = body.query;

            fs.readFile(catsPath, (err, catsData) => {
                if (err) throw err;

                const cats = JSON.parse(catsData);
                const filteredCats = cats.filter(el => el.name.includes(query));

                const filePath = path.normalize(
                    path.join(__dirname, '../views/home/index.html')
                );

                fs.readFile(filePath, (err, data) => {
                    if (err) throw err;

                    const catsPlaceholder = filteredCats.map(cat =>
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

                    const modifiedData = data.toString().replace('{{cats}}', catsPlaceholder);

                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });

                    res.write(modifiedData);
                    res.end();
                });
            });
        });

    } else {
        return true;
    }
}