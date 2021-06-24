const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// ex 1
// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon; // julia me explicou que isso é uma desconstucao e que é mesmo que dizer dragon.strength que retorna 50
  const dragonDmg = Math.floor((Math.random() * (strength - minDmg) + minDmg));// math random faz começar em 15 e terminar em 49
  return dragonDmg;
};

console.log(dragonAttack(dragon));

//ex 2 

const warriorAttack = (warrior) => {
  const { weaponDmg } = warrior;// dano da arma 
  const minDmg = warrior.strength;// puxou a forca do guerreiro
  const maxDmg = minDmg * weaponDmg; // dano da arma * a força
  const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);// começa em 30 e vai até 59
  return warriorDamage;
};

console.log(warriorAttack(warrior));
