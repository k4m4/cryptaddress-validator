# cryptaddress-validator [![Build Status](https://travis-ci.org/k4m4/cryptaddress-validator.svg?branch=master)](https://travis-ci.org/k4m4/cryptaddress-validator)

> Validate Bitcoin, Ethereum, Litecoin & other popular cryptocurrency addresses.


## Install

```
~ ❯❯❯ npm install cryptaddress-validator
```


## Usage

```js
const cryptaddress = require('cryptaddress-validator');

cryptaddress().test('1Ez69SnzzmePmZX3WpEzMKTrcBF2gpNQ55')
//=> true

cryptaddress('eth').test('0x281055afc982d96fab65b3a49cac8b878184cb16')
//=> true

cryptaddress('btc').test('1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp')
//=> true

cryptaddress('bch').test('LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst')
//=> false

cryptaddress('md5').test('0x281055afc982d96fab65b3a49cac8b878184cb16')
//=> 'Unsupported cryptocurrency'
```


## API

### cryptaddress (cryptocurrency)

Returns the regex of the specified cryptocurrency.

#### cryptocurrency

Type: `string`

Cryptocurrency to build the appropriate validation regex.


## Supported Cryptocurrencies

- [`Bitcoin/BTC`](https://github.com/kevva/bitcoin-regex)
- [`Bitcoin Cash/BCH` (CashAddr addresses)](https://github.com/k4m4/bitcoincash-regex)
- [`Ethereum/ETH`](https://github.com/k4m4/ethereum-regex)
- [`Litecoin/LTC`](https://github.com/k4m4/litecoin-regex)
- [`Monero/XMR`](https://github.com/k4m4/monero-regex)
- [`Dash/DASH`](https://github.com/k4m4/dash-regex)
- [`Ripple/XRP`](https://github.com/k4m4/ripple-regex)
- [`NEO/NEO`](https://github.com/k4m4/neo-regex)
- [`Dogecoin/DOGE`](https://github.com/k4m4/dogecoin-regex)


## Related

- [cryptocurrency-address-detector](https://github.com/k4m4/cryptocurrency-address-detector) - Detect which cryptocurrency an address corresponds to.
- [cryptaddress.now](https://github.com/k4m4/cryptaddress.now) - Minimal service to detect which cryptocurrency an address corresponds to. 


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)