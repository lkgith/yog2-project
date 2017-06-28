var recommend = require('../model/recommend/recommend.js');
var ranklist = require('../model/ranklist/ranklist.js');
var tab = require('../model/tab/tab.js');
var Promise = require('bluebird');
module.exports = function(req, res){
	function renderPage(data){
		res.render('myapp/page/index.tpl', data);
	}
	var result = {};
	
	Promise.all([recommend.getData(), ranklist.getData(), tab.getData()]).then(function(data){
		result.recommend = data[0];
		result.ranklist = data[1].data;
		result.tab = data[2];
		renderPage(result);
	});
};