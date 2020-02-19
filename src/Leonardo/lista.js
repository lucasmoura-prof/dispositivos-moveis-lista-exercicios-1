/* Lista 01
 * Description: 
 * Author: Leonardo Leal Queiroz Marrega
 */

function responder(exNumber, answer) {
    let elementId = 'ex' + exNumber + '-r';
    let element = document.getElementById(elementId);

    element.innerText = JSON.stringify(answer, null, 4);
}
