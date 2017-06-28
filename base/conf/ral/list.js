module.exports.RANKLIST = {
    unpack: 'json',
    pack: 'querystring',
    method: 'GET',
    encoding: 'utf-8',
    balance: 'random',
    protocol: 'http',
    retry: 2,
    timeout: 1000,
    path: '/iphnativelist/',
    query: {
        version: '7.3.1'
    },
    server: [
        {
            host: 'i.webapp.video.baidu.com',
            port: 80
        }
    ]
}