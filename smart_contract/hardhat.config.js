// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/zPtqPB77YnwLRP9xECA6yJymUAapqr0Y",
      accounts: [
        "20fed9390cd565eeefa006d7a9686c7d808b80e8a02f099b6841fadab9c61d77",
      ],
    },
  },
};
