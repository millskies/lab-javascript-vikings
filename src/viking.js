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