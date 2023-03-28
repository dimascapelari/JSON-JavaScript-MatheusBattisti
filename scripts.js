const objs = [
  {
    nome: "Dimas",
    idade: 40,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "ACSP",
    },
    hobbies: ["Pedalar", "Programar", "Estudar"],
  },
  {
    nome: "Mariana",
    idade: 37,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Andar de bicicleta", "Codar", "Agradar o marido Dimas"],
  },
];

console.log(objs);
// JSON
// converter objeto para json
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// converter json para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});
