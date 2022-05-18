const { utils, providers, Wallet } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function donate(privateKey, addresses) {
  const wallet = new Wallet(privateKey, provider);
  for (let address of addresses) {
    let tx = await wallet.sendTransaction({
      to: address,
      value: utils.parseEther('1.0'),
    });
  }
}

module.exports = donate;
