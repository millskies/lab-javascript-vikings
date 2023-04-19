// Soldier
class Soldier {
    
    constructor(health, strength)
     {
        this.healthSoldier = health
        this.strengthSoldier = strength
     }


    attack(){
        return this.strengthSoldier
    }

    receiveDamage(damage){
         this.healthSoldier - damage
    }
        
}



// Viking
class Viking extends Soldier {

    constructor(name, health, strength) {
     this.vikingName = name
     this.vikingHealth = health
     this.vikingStrength = strength

    }

    attack(){
        return this.vikingStrength
    }

    receiveDamage(damage){
        this.vikingHealth - damage;
        if (this.vikingHealth > 0) return `${name} has received ${damage} points of damage`;
        else return `${name} has died in act of combat`
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}


// Saxon
class Saxon extends Soldier{
    attack(){
        return this.saxonStrength
    }
    receiveDamage(damage){
        this.saxonHealth - damage;
        if (this.saxonHealth > 0) return `A Saxon has received ${damage} points of damage`
        else return `A Saxon has died in combat`;
    }
}

// War
class War {}