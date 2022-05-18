const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const privateKey = '';
const wallet1 = new Wallet(privateKey);

// create a wallet from example mnemonic
const mnemonic = '';
const wallet2 = Wallet.fromMnemonic(mnemonic);

module.exports = {
  wallet1,
  wallet2,
};
