/* Lista 01 - Exercício 05
 * Description: Dado o vetor apresentado, escreva uma função que produza o seguinte resultado: O João possui as habilidades: Javascript, ReactJS A Maria possui as habilidades: Flutter, Assemby, C#.
 * Author: Leonardo Leal Queiroz Marrega
 */

function getPersonString(pessoa) {
    // Processar vetor
    if(Array.isArray(pessoa)) {
        let r = [];
        for(let u of pessoa)
            r.push(getPersonString(u))
        return r;
    }

    // Processar objeto
    // O João possui as habilidades: Javascript, ReactJS

    let plural = pessoa.habilidades.length < 2 ? '' : 's';
    return (pessoa.sexo == 'masculino' ? 'O ' : 'A ') + pessoa.nome + ' possui a' + plural + ' habilidade' + plural + ': ' + pessoa.habilidades.join(', ');
}

(function() {

    let usuarios = [
        {
            nome: "João",
            sexo: 'masculino',
            habilidades: ["Javascript", "ReactJS"]
        },
        {
            nome: "Maria",
            sexo: 'feminino',
            habilidades: ["Flutter", "Assemby", "C#"]
        }
    ];

    let r = getPersonString(usuarios);
    console.log(r);

    if(responder) responder(5, r);

})();