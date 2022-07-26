import express from "express";
import Index from "../src/Index";
const app = express();
import path from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

app.get('/', (req, res) => {
	const app = renderToString(<Index />);

	const indexFile = path.resolve('./public/index.html');
	fs.readFile(indexFile, 'utf8', (err, data) => {
		if (err) {
			console.error('Something went wrong:', err);
			return res.status(500).send('Oops, better luck next time!');
		}

		return res.send(
			data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
		);
	});
});

app.use(express.static('./dist'));
const server = app.listen(9000, ()=>{});