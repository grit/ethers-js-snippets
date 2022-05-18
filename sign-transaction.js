const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./wallets');

const address = '';

const signaturePromise = wallet1.signTransaction({
  value: utils.parseEther('1.0'),
  to: address,
  gasLimit: '0x5208',
  gasPrice: utils.parseUnits('2', 'gwei'),
});

module.exports = signaturePromise;
