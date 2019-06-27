import test from 'ava';
import m from './';

const fixturesBTC = [
	'1dice8EMZmqKvrGE4Qc9bUFf9PX3xaYDp',
	'1JeTiYgfVtpA3ygQTYFswkaoiH2VnFZJf9',
	'1Ak6rNZYm5tNtDVJRt93Cax17TBih6pM7Y',
	'1dice6YgEVBf88erBFra9BHf6ZMoyvG88',
	'1FFirnLctcZxVx5otnLNZ4dDGUkMBM4vNr'
];
test('Bitcoin', async t => {
	for (const x of fixturesBTC) {
		t.true(await m('btc').test(x));
	}
});

const fixturesBCH = [
	'bitcoincash:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a',
	'bitcoincash:qr95sy3j9xwd2ap32xkykttr4cvcu7as4y0qverfuy',
	'bitcoincash:ppm2qsznhks23z7629mms6s4cwef74vcwvn0h829pq',
	'bitcoincash:pr95sy3j9xwd2ap32xkykttr4cvcu7as4yc93ky28e',
	'bitcoincash:pqq3728yw0y47sqn6l2na30mcw6zm78dzq5ucqzc37'
];
test('Bitcoin Cash', async t => {
	for (const x of fixturesBCH) {
		t.true(await m('bch').test(x));
	}
});

const fixturesETH = [
	'0x281055afc982d96fab65b3a49cac8b878184cb16',
	'0x6f46cf5569aefa1acc1009290c8e043747172d89',
	'0x90e63c3d53e0ea496845b7a03ec7548b70014a91',
	'0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e',
	'0x53d284357ec70ce289d6d64134dfac8e511c8a3d'
];
test('Ethereum', async t => {
	for (const x of fixturesETH) {
		t.true(await m('ETH').test(x));
	}
});

const fixturesLTC = [
	'LQL9pVH1LsMfKwt82Y2wGhNGkrjF8vwUst',
	'LPpHectVSbk7YHa5X89Cm3FoFBfzkJBJc9',
	'LRcYfbDMhwvXaGPFccaKuc3fZD1Nb55aGn',
	'LY5fxZS74Ewuj1TTHwat23eUmZwimsksrU',
	'Laub752qu81oWwkNKEyawyKruUC6cEyD2x'
];
test('Litecoin', async t => {
	for (const x of fixturesLTC) {
		t.true(await m('LTC').test(x));
	}
});

const fixturesDOGE = [
	'DANHz6EQVoWyZ9rER56DwTXHWUxfkv9k2o',
	'DDTtqnuZ5kfRT5qh2c7sNtqrJmV3iXYdGG',
	'DP5mjk9SEYtzhnhkkC24PEjxNtDN7JGRx3',
	'D8EyEfuNsfQ3root9R3ac54mMcLmoNBW6q',
	'DFN5b3Usara4aZAvhT6muXd3hR49d5zxio'
];
test('Dogecoin', async t => {
	for (const x of fixturesDOGE) {
		t.true(await m('DOGE').test(x));
	}
});

const fixturesDASH = [
	'XbtvGzi2JgjYTbTqabUjSREWeovDxznoyh',
	'Xm9TJiJ7nWjme8K7iEPUGsC5JjYGzPk2QU',
	'Xe4q4hA2bXWuZHHDRPb3R72cpauDYEk8CP',
	'XvwKzdsn46psqy6WhZ2wfhRPyRkD6GL2BG',
	'XcKvX5SeAwPSfyiKBw6QKt6EnA9FtWvk1r'
];
test('Dash', async t => {
	for (const x of fixturesDASH) {
		t.true(await m('DASH').test(x));
	}
});

const fixturesXMR = [
	'47BnvD18P456f4KJUBKPS3Rqa97LrTaeqJ5NFYmjQM6nVoz6TBv4rJ24GZk883BNo22fAKbr8BSuTjhQC6K7DsSJFa8SHDs',
	'42oAxV3DVXXG3HhyCyi2xaPukKXbip9Sx1YuJtoCqjZRSze4tYCq7n3VUswDBFV59Zev8yfHSZro4TUwXumtRWnQ8xQipkC',
	'44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A',
	'47gRtvuDS9dNjkNs2nFqiSVHk3tqdT239j9Tj1KxAWNPRogHnGUdMdvQBwevobeAxQHqjBu8WcZzfNrdbReYNAU1KBidTzc',
	'46qB9tcR1feVZ7xq42tx8V8sLbYdnFdGf6EndL1fCPRuUXroufYGzzCFtZwrjkthAc8C65xBpmWCYAR1KKBXykF76GADvYE'
];
test('Monero', async t => {
	for (const x of fixturesXMR) {
		t.true(await m('XMR').test(x));
	}
});

const fixturesXRP = [
	'rG2ZJRab3EGBmpoxUyiF2guB3GoQTwMGEC',
	'rfBKzgkPt9EvSJmk1uhoWTauaFCaRh4jMp',
	'rPDXxSZcuVL3ZWoyU82bcde3zwvmShkRyF',
	'r9Gps6fB9YLuZ87rWx7M9TgLAGK2zsz5s6',
	'rJHygWcTLVpSXkowott6kzgZU6viQSVYM1'
];
test('Ripple', async t => {
	for (const x of fixturesXRP) {
		t.true(await m('XRP').test(x));
	}
});

const fixturesNEO = [
	'AQVh2pG732YvtNaxEGkQUei3YA4cvo7d2i',
	'AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT',
	'AddZkjqPoPyhDhWoA8f9CXQeHQRDr8HbPo',
	'APMyYHutJZsZVWAQRe9h4eVrzzD3HLroQW',
	'ANpB7FBPoPpqjxKFWiiAD3arFgsQtwYUPb'
];
test('NEO', async t => {
	for (const x of fixturesNEO) {
		t.true(await m('NEO').test(x));
	}
});

const fixturesNot = [
	'192.168.1.1,192.168.1.2,192.168.1.3',
	'k4m4/ethereum-regex',
	'0xsfdlffsjksldfj[IPv6:2001:db8::2]',
	'nikolaskam{at}gmail{dot}com'
];
test('Non-crypto', async t => {
	for (const x of fixturesNot) {
		t.false(m().test(x))
	}
});