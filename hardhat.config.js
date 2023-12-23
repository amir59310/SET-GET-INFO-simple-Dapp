require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const endpointUrl = process.env.API_URL;
const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.21",
  networks: {

    sepolia: {
      url: endpointUrl,
      accounts: [privateKey],
    },
  },
};
