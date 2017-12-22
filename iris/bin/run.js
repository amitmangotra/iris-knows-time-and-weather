'use strict';

const service = require('../server/service');
const http = require('http');

const slackClient = require('../server/slackClient');
const server = http.createServer(service);

const witToken = process.env.WIT_API_TOKEN;
const witClient = require('../server/witClient')(witToken);

const slackToken = process.env.SLACK_API_TOKEN;
const slackLogLevel = 'verbose';

const serviceRegistry = service.get('serviceRegistry');
const rtm = slackClient.init(slackToken, slackLogLevel, witClient, serviceRegistry);
rtm.start();

const PORT = process.env.PORT || 3000;

slackClient.addAuthenticatedHandler(rtm, () => server.listen(PORT));


server.on('listening', listeningFunction);

function listeningFunction() {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
}
