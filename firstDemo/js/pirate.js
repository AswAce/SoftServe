class Pirate {
    constructor(name, possition, fightStile, devilFruit, dream) {
        this.name = name;
        this.possition = possition;
        this.fightStile = fightStile;
        this.devilFruit = devilFruit;
        this.dream = dream;
    }
    introduce() {
        return (
            "My name is " +
            this.name +
            ". I am " +
            this.possition +
            " and I have a dream: " +
            this.dream +
            ".\n I fight with " +
            this.fightStile +
            " and have " +
            this.devilFruit +
            " devil fruit."
        );
    }
}

export class Navigator extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Navigator", fightStile, devilFruit, dream);
    }
}
export class Captain extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Captain", fightStile, devilFruit, dream);
    }
}
export class ViceCaptain extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "ViceCaptain", fightStile, devilFruit, dream);
    }
}
export class Cook extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Cook", fightStile, devilFruit, dream);
    }
}
export class Sniper extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Sniper", fightStile, devilFruit, dream);
    }
}
export class Doctor extends pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Doctor", fightStile, devilFruit, dream);
    }
}
export class Crew {
    constructor(name, flag, members) {
        this.name = name;
        this.flag = flag;
        this.members = members;
    }
}