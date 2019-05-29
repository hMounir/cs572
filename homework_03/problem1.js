const dnsModule = require('dns');
const util = require('util');

const promiseResolve = util.promisify(dnsModule.resolve4);

async function getIpAddress(){
    const d = await promiseResolve('www.mum.edu');
    console.log(d);
}

getIpAddress();