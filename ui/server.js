const express = require('express');
const nextApp = require('next');

const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = nextApp({ dev, dir: 'app' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/hero/:heroId', (req, res) => {
        console.log(`got to /hero! id: ${req.params.heroId}`);
        const queryParams = { title: req.params.id };
        app.render(req, res, '/hero', queryParams);
    });

    server.get('/heroes/:heroRole', (req, res) => {
        app.render(req, res, '/heroes', { heroRole: req.params.heroRole });
    });

    server.get('*', (req, res) => {
        console.log('getting request handler and handling');
        return handle(req, res);
    });

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
