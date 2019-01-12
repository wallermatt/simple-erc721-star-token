// Allows us to use ES6 in our migrations and tests.
require('babel-register')
const HDWalletProvider = require("truffle-hdwallet-provider");

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
     return new HDWalletProvider(
       "machine song affair punch place dish timber inquiry topple tiger palm stay",
       "https://rinkeby.infura.io/v3/1dc25d2fc89e46f392b46576154a6163")
      },
          network_id: '4',
          gas: 4500000,
          gasPrice: 10000000000,
    }
  }
}
