require('@nomiclabs/hardhat-waffle');
const { API_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
}



