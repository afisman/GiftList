const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  var randomName = niceList[Math.floor(Math.random() * niceList.length)]
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    randomName
    // TODO: add request body parameters here!
  });

  console.log({ gift });
}

main();