/* Lista 01 - Exercício 02
 * Description: Crie uma função que dado um intervalo (entre x e y), exiba todos número pares.
 * Author: Leonardo Leal Queiroz Marrega
 */

function pares(min, max) {
    min += min % 2;

    let r = [];

    for(let i = min; i <= max; i += 2)
        r.push(i);

    return r;
}

(function() {

    let r = pares(5, 15);
    console.log(r);

    if(responder) responder(2, r);

})();