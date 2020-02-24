/* Lista 01 - Exercício 04
 * Description: Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é.
 * Author: Leonardo Leal Queiroz Marrega
 */

function experiencia(anos) {
    if(anos < 1)
        return 'Iniciante';
    else if(anos < 3)
        return 'Intermediário';
    else if(anos < 6)
        return 'Avançado';
    else
        return 'Jedi Master';
}

(function() {

    let anosEstudo = 7;
    let exp = experiencia(anosEstudo);
    console.log(exp);

    if(responder) responder(4, exp);

})();