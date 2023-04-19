

// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
        attack(){
            return this.strength;
        }
        receiveDamage(damage){
            this.health -= damage;
        }
    }
    
    
    // Viking
    class Viking extends Soldier {
        constructor(name, health, strength) {
            super(health, strength);
            this.name = name;
        }
        
        receiveDamage(damage) {
          this.health -= damage;
          if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
          } else {
            return `${this.name} has died in act of combat`;
          }
        }
        
        battleCry() {
            return "Odin Owns You All!";
        }
    }
    
    
    // Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let viking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 
        let saxonIndex = Math.floor(Math.random()*this.saxonArmy.length);
        let saxon = this.saxonArmy[saxonIndex];
        saxon.receiveDamage(viking.strength);

        if(saxon.health <= 0){
            this.saxonArmy.splice(saxonIndex, 1)
        }
        return resultAttack;
    }
    saxonAttack(){
        let vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
         let viking = this.vikingArmy[vikingIndex];
         let saxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
         let resultAttack = viking.receiveDamage(saxon.strength);
         
         if(viking.health <= 0){
            this.vikingArmy.splice(vikingIndex, 1);
         }
         return resultAttack;
    }
    attack(attacker, victim){
    
        console.log(attacker instanceof Viking);
        console.log(victim instanceof Viking);
    }
    showStatus(){
         if (this.saxonArmy.length == 0) return "Vikings have won the war of the century!";
         if (this.vikingArmy.length == 0) return "Saxons have fought for their lives and survived another day...";
         if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) return "Vikings and Saxons are still in the thick of battle";
    }
}


let war 



// original one i think

// Soldier
class Soldier {
    
    constructor(health, strength)
     {
        this.healthSoldier = health
        this.strengthSoldier = strength
     }


    battleCry() {
        console.log("aaaaaa!");
    }

    getHealth() {
        return this.healthSoldier
    }
}

let life = 500

const soldier1 = new Soldier(life, 20)
const soldier2 = new Soldier(100, 50)

soldier1.getHealth()

// Viking
class Viking extends Soldier {

    constructor() {

    }

    battleCry() {
        console.log('ODIN FUCKING BOSS')
    }

    attac
}

const viking1 = new Viking()

viking1.battleCry
// Saxon
class Saxon {}

// War
class War {}

let book = {
    title: 'Principito',
    pages: 500, 
}

let name = 'Camila';
name = 'Yabel'

let number = 5 
number = 250

const bookstore = [{},{},{}]
const numbers = [1,2,3]

function readBook(book) {
    console.log(book)
}


const sum = (num1,num2) => {
    let result = num1 + num2
    console.log(result)
    return result
}

let operation1 = sum(2, 4)
sum(5, 6)
sum()

console.log('a')