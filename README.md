## Programação Para Dispositivos Móveis

Lista 1 de exercícios da disciplina "Programação para Dispositivos Móveis".


## Enviando as soluções dos exercícios

1. Faça o Fork desse repositório conforme ensinado na primeira aula;
2. Faça o clone do repositório que foi criado no seu **perfil** após o Fork, na sua máquina;
3. Dentro da pasta "src", crie uma nova pasta com o seu nome. Caso o seu primeiro nome não seja único na turma, adicioanr também um sobrenome. Ex: ./src/LucasMoura
4. Dentro da pasta criada,  adicione todo os arquivos relacionados à resolução dos exercícios dessa lista.
5. Após conclúida, faça o envio dos commits com o comando push. Obs: você deverá fazer os commits e o push no repositório que está na sua conta do GitHub, criado através do botão Fork.
6. Após confirmar os commits, faça uma "Pull request" do seu repositório selecionando o repositório original como destino. Informar o nome completo do aluno na descrição da PR (pull-request).

## Exercícios

1- Crie uma função que dado o objeto no formato a seguir:
```javascript
var address = {
	rua: "Rua Vinte e Dois",
	numero: 1239,
	bairro: "Centro",
	cidade: "Ituiutaba",
	uf: "MG"
};
```

Retorne o seguinte conteúdo:
`A pessoa mora em Ituiutaba-MG, no bairro Centro, na rua "Rua Vinte e Dois", número 1239.`

2- Crie uma função que dado um intervalo (entre x e y), exiba todos número pares:

```javascript
function pares(x, y) {
	// Implementação da função aqui
}

pares(5, 540);
```

3- Escreva uma função que verifique se um vetor skills passado por parâmetro, se possui a habilidade "Javascript" e retorne um booleano true/false caso exista ou não.

```javascript
function temHabilidade(skills) {
	// Implementação
}
var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false
```
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

4- Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```javascript
function experiencia(anos) {
	// Implementação
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

5- Dado o seguinte vetor de objetos:
```javascript
var usuarios = [
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
```
Escreva uma função que produza o seguinte resultado:
`O João possui as habilidades: Javascript, ReactJS`
`A Maria possui as habilidades: Flutter, Assemby, C#`

Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array com um separador utilize a função join.
