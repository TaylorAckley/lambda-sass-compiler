'use strict';
require('dotenv').config();

let Compiler = require('sass-template-factory');

exports.compiler = function (event, context, callback) {

	let options = {
		tpl: Buffer.from(event.tpl, 'base64').toString('utf-8'),
		opts: event.opts
	};

	let c = new Compiler(options);

	c.compile()
		.then((res) => {
			callback(null, res);
		});

};