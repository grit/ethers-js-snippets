const ethers = require('ethers');
require('dotenv').config();

async function main() {
  // Alchemy/Infura HTTP endpoint URL
  const url = process.env.GOERLI_URL;

  // hook up ethers provider
  const provider = new ethers.providers.JsonRpcProvider(url);

  const privateKey = process.env.GOERLI_PRIVATE_KEY;

  const wallet = new ethers.Wallet(privateKey, provider);

  const toAddr = '';
  const walletBalance = await wallet.getBalance();

  console.log(
    'Balance of sender address before tx: ' +
      ethers.utils.formatEther(walletBalance)
  );

  console.log('Sending ether from ' + wallet.address + ' to ' + toAddr);

  const tx = await wallet.sendTransaction({
    to: toAddr,
    value: ethers.utils.parseEther('.0001'),
  });

  // waits for the tx to be mined so that any subsequent queries are accurate
  await tx.wait();
  console.log('Tx hash: ' + tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
