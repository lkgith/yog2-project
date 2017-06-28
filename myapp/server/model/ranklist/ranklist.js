module.exports.getData = function(cb){
	var data = {
		cre: 'sinapc',
		mod: 'picg',
		statics: 1,
		merge: 3,
		type: 1,
		length: 20,
		cateid: 't_s',
		fields: 'url,stitle,title,thumb'
	};
	
 	return yog.ral('RANKLIST', {
		data: data
	});
}