require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'include clog swift suggest firm crater remind equip gloom entire tail gentle'; 
let testAccounts = [
"0xbb6043cef081f7e5974b265d93f834c6e402246e8990061abb9dac3025e860ba",
"0x8767df1f518a15e2af31cfd38ca41bef262ce379e8f0079bfcf1daf48d93daaf",
"0x03ae7b1760bc5b00264265cf1e971b36a276c2aced4eac655169ae2a8f5f1215",
"0xc73e7ebb5e21e4e8184e33ebbd202dcf1cb030912daa59ee9a42bf91bf3ab156",
"0xabe1110ffe6fbeb01b63cde4cb3860ecc067e21351e74dff966d98086db1e4b6",
"0x3d34615ea2ef5d02ab49c7db5f997c14df177eaf0a6ce27880bf6a576f1d76f8",
"0x5e9301ae10d2806e7fde64b6b20bce0bd2fbacfbdb4042ac5dccde05e159f962",
"0x98c0b9c4f6dd6450c36c1c718712c5247f8be5bd54251bec776959fa91555a36",
"0x00b6868448a727ce4744aba1fdafed1cf29d54a08b2c6069416fcbe3463b9cb4",
"0xeb7e66a905279955a87a8110e107b625022cccedd728d9f78f69e287ff32489a"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


