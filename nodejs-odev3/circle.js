function daireAlaniHesaplama(arguman) {

    let sonuc = Math.PI * Math.pow(arguman, 2)

    console.log(`Yarıçapı ${arguman} olan dairenin alanı = ${sonuc}.`);

}

function daireCevresiHesaplama(arguman) {

    let sonuc = 2 * Math.PI * Math.pow(arguman, 2)

    console.log(`Yarıçapı ${arguman} olan dairenin çevresi = ${sonuc}.`);

}

module.exports = { daireAlaniHesaplama, daireCevresiHesaplama }
