'use strict';

let Compiler = require('sass-template-factory');

exports.compiler = function(event, context, callback) {

let options = {
    tpl: event.tpl, // Not needed if you plan to grab the template from S3
    opts: event.opts
};

let c = new Compiler(options);

c.compile()
	.then((res) => {
		callback(null, res);
	})



}