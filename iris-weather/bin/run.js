'use strict';

const request = require('superagent');
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);


server.listen();


server.on('listening', listeningFunction);

function listeningFunction() {
    console.log(`IRIS-weather is listening on ${server.address().port} in ${service.get('env')} mode.`);

    const announce = () => {
        request.put(`http://127.0.0.1:3000/service/weather/${server.address().port}`, (err, res) => {
            console.log(err);
            if(err) {
                console.log("Error connecting to Iris");
                return;
            }
        });
    };

    announce();
    setInterval(announce, 15*1000);
}