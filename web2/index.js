const express = require('express');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const { Client } = require('pg');

// create application/json parser
var jsonParser = bodyParser.json();


const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password'
});

client.connect();
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/analytics/:publisher_id/sum/:column', (req, res) => {
    const publisher_id = req.params.publisher_id;
    const column = req.params.column;
    const formula =
        column === 'ctr' ? 'SUM(clicks) / SUM(impressions)' : `SUM(${column})`;
    client.query(
        `SELECT CAST(${formula} AS float) as sum FROM ad_analytics WHERE publisher_id = '${publisher_id}';`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                console.log(result.rows);
                res.status(200).send(result.rows[0]);
            }
        }
    );
});

app.get('/analytics/:publisher_id/timeseries/:column', (req, res) => {
    const publisher_id = req.params.publisher_id;
    const column = req.params.column;
    const formula = column === 'ctr' ? 'clicks / impressions' : `${column}`;
    client.query(
        `SELECT time, CAST(${formula} AS float) as ${column} FROM ad_analytics WHERE publisher_id = '${publisher_id}';`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.send(result.rows);
            }
        }
    );
});

app.get('/analytics/:publisher_id/distribution/:column', (req, res) => {
    const publisher_id = req.params.publisher_id;
    const column = req.params.column;
    const formula =
        column === 'ctr' ? 'SUM(clicks) / SUM(impressions)' : `SUM(${column})`;
    client.query(
        `SELECT ad_name, CAST(${formula} AS float) as sum FROM ad_analytics WHERE publisher_id = '${publisher_id}' GROUP BY ad_name;`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.send(result.rows);
            }
        }
    );
});

app.post('/analytics/capture', jsonParser, (req, res) => {
    const {
        publisher_id,
        ad_name,
        impressions,
        clicks,
        ad_id,
        user_id,
        dapp_id
    } = req.body;
    client.query(
        `INSERT INTO ad_analytics (publisher_id, ad_name, impressions, clicks, ad_id, user_id, dapp_id) VALUES ('${publisher_id}', '${ad_name}', ${impressions}, ${clicks}, '${ad_id}', '${user_id}', '${dapp_id}');`,
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        }
    );
});

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
});
