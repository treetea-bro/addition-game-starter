// truffle.js config for klaytn.
const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");
const NETWORK_ID = "1001";
const GASLIMIT = "20000000";
const URL = "https://api.baobab.klaytn.net:8651";
const PRIVATE_KEY =
  "0x9c988d56ea66aca809971ef4e9ba0e2a2ec59406f15cf1b341192f8aa45a2cdc";
module.exports = {
  networks: {
    klaytn: {
      provider: new HDWalletProvider(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
};
