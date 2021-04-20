require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strike dash rural exact harvest high swift system'; 
let testAccounts = [
"0xb6c3e42b931936bdf40f2ffe8b9de90414c8ad87538bdfe13ffc072a4fc3dc37",
"0x4dc535397a90defad1fa665bfa88bb73c75dc024f6a19c965a410bb1e5fbe342",
"0xbe06e80b32671ff27e15588e4e56ec99b65ee0aca5009e869a83ea78a05ec659",
"0xa2bea850c00ed2c429abac3428901caca418b8d3478024da1acfe29ff8dc5f1c",
"0x0e3bb31cd72b0af2a4213e81e62f814e56ae32e17352efcf5c401b6285c7dc81",
"0x3a3b3b507bba9e56a36eac81d54a0864d851f7e3dbd3f47581bd9fd427636173",
"0x76f8839f1c99e5303fee80275f7b35993bf48c636a6aba2c5f45781adb576862",
"0xf0c1c1754f4bf2bef0163a2b2bfe849f7928b298f23bac59a68eb76dcb54ba83",
"0x52320465056744f5494d158b4da1d6cbf72d622bce21951c027cb8deb0f24b17",
"0x6435a6e870c69a2ba44543d56377a75f8db31d4678fcd41ce7d9f08b1ba06155"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
