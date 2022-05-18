const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function findEther(address) {
  let toAddresses = [];
  // assuming three blocks mined after genesis block
  for (let i = 0; i <= 3; i++) {
    let block = await provider.getBlockWithTransactions(i);
    block.transactions.forEach(trx => {
      if (trx.from === address) {
        toAddresses.push(trx.to);
      }
    });
  }
  return toAddresses;
}

module.exports = findEther;
