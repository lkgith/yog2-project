module.exports.RANKLIST = {
    unpack: 'json',
    pack: 'querystring',
    method: 'GET',
    encoding: 'utf-8',
    balance: 'random',
    protocol: 'http',
    retry: 2,
    timeout: 1000,
    path: 'api/v3/get',
    query: {
        version: '7.3.1'
    },
    server: [
        {
            host: 'cre.mix.sina.com.cn',
            port: 80
        }
    ]
}