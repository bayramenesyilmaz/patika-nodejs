
function daireAlaniHesaplama(arguman) {

    let sonuc = Math.PI * Math.pow(arguman,2)

    console.log(`Yarıçapı ${arguman} olan dairenin alanı = ${sonuc}.`);
    
}

let arguman = process.argv[2];

daireAlaniHesaplama(arguman);