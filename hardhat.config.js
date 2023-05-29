require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/6ZyvwpzjMYrb6lXqwy2QvbI6fBDyGK08",
      accounts: [
        "llave privada"
      ]
    }
  }
};
