export class Pirate {
    constructor(name, picture, possition, fightStile, devilFruit, dream) {
        this.name = name;
        this.picture = picture;
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


export class Captain extends Pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Captain", fightStile, devilFruit, dream);
    }
}
export class ViceCaptain extends Pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "ViceCaptain", fightStile, devilFruit, dream);
    }
}
export class Navigator extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Navigator", fightStile, devilFruit, dream);
    }
}
export class Cook extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Cook", fightStile, devilFruit, dream);
    }
}
export class Sniper extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Sniper", fightStile, devilFruit, dream);
    }
}
export class Doctor extends Pirate {
    constructor(name, fightStile, devilFruit, dream) {
        super(name, "Doctor", fightStile, devilFruit, dream);
    }
}
export class Archelogist extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Archelogist", fightStile, devilFruit, dream);
    }
}
export class ShipMechanic extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "ShipMechanic", fightStile, devilFruit, dream);
    }
}
export class Musician extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Musician", fightStile, devilFruit, dream);
    }
}
export class Pilot extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Pilot", fightStile, devilFruit, dream);
    }
}