let nomes = ["Luiz", "Leticia", "Laura", "Lucas", "Leonardo", "Luiz", "Livia", "Laura", "Luiz", "Leonardo", "Leandro"];


let nomeNovos = nomes.filter((este, i) => nomes.indexOf(este) === i);
console.log(nomeNovos); 