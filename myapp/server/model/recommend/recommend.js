module.exports.getData = function(cb){
    var data = {
        cate: 96,
        apptype: 1,
        pg: 14,
        module: 1,
        pl: 10,
        guid: '1495532398185ZyT',
        picSize: 1,
        pz: 30,
        req_id: '14986402895682tm'
    };
    return yog.ral('RECOMMEND', {
        data: data
    });
};