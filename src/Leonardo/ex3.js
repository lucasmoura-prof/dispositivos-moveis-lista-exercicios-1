/* Lista 01 - Exercício 03
 * Description: Escreva uma função que verifique se um vetor skills passado por parâmetro, se possui a habilidade "Javascript" e retorne um booleano true/false caso exista ou não.
 * Author: Leonardo Leal Queiroz Marrega
 */

function temHabilidade(skills) {
    return skills.indexOf('Javascript') != -1;
}

(function() {

    let skills = ["Javascript", "ReactJS", "React Native"];
    let temSkills = temHabilidade(skills);
    console.log(temSkills);

    if(responder) responder(3, temSkills);

})();