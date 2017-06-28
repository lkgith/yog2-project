module.exports.RECOMMEND = {
    unpack: 'json',
    pack: 'querystring',
    method: 'GET',
    encoding: 'utf-8',
    balance: 'random',
    protocol: 'http',
    retry: 2,
    timeout: 1000,
    path: 'personal/packed/list.json',
    query: {},
    server: [
        {
            host: 'ykrec.youku.com',
            port: 80
        }
    ]
}