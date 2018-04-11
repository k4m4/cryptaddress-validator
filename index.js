'use strict';

const cryptoRegExps = {
	"btc": "[13][a-km-zA-HJ-NP-Z1-9]{25,34}",
	"bch": "[13][a-km-zA-HJ-NP-Z1-9]{33}",
	"eth": "0x[a-fA-F0-9]{40}",
	"ltc": "[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}",
	"doge": "D{1}[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}",
	"dash": "X[1-9A-HJ-NP-Za-km-z]{33}",
	"xmr": "4[0-9AB][1-9A-HJ-NP-Za-km-z]{93}",
	"neo": "A[0-9a-zA-Z]{33}",
	"xrp": "r[0-9a-zA-Z]{33}"
}

function buildRegExp(bodyExp, opts) {
	let beginning = `\\b(?:`, end = `)\\b`
	if (opts && opts.exact) {
		beginning = `^(`
		end = `)$`
	}
	const regExp = beginning + bodyExp + end
	if (opts && opts.exact) {
		return new RegExp(regExp)
	}
	return new RegExp(regExp, 'g')
}

const cryptaddress = (opts) => {
  let individualRegExps = []
  for (const cryptocurrency in cryptoRegExps) {
    let oneRegExp = '(?:' + cryptoRegExps[cryptocurrency] + `)`
    individualRegExps.push(oneRegExp)
  }
	const bodyExp = individualRegExps.join(`|`)
	return buildRegExp(bodyExp, opts)
}

cryptaddress.cryptocurrency = (cryptocurrency, opts) => {
  if (!cryptoRegExps[cryptocurrency]) {
    throw new Error('Unsupported cryptocurrency')
  }
	const bodyExp = cryptoRegExps[cryptocurrency]
	return buildRegExp(bodyExp, opts)
}

module.exports = cryptaddress;