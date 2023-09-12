require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21",
  
};
const networks = {
  hardhat: {
    gas: 1000000, // Default gas limit is 5000000
  },
};