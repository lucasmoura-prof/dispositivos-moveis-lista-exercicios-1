/* Lista 01 - Exercício 01
 * Description: Crie uma função que dado o objeto apresentado, retorne o seguinte conteúdo: 'A pessoa mora em Ituiutaba-MG, no bairro Centro, na rua "Rua Vinte e Dois", número 1239'.
 * Author: Leonardo Leal Queiroz Marrega
 */

function getAddressString(address) {
    return 'A pessoa mora em ' + address.cidade + '-' + address.uf + ', no bairro ' + address.bairro + ', na rua "' + address.rua + '", número ' + address.numero + '.';
}

(function() {

    let address = {
        rua: "Rua Vinte e Dois",
        numero: 1239,
        bairro: "Centro",
        cidade: "Ituiutaba",
        uf: "MG"
    };

    let str = getAddressString(address);
    console.log(str);

    if(responder) responder(1, str);

})();