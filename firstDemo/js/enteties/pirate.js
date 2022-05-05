export class Pirate {
    constructor(name, picture, possition, fightStile, devilFruit, dream) {
        this.name = name;
        this.picture = picture;
        this.possition = possition;
        this.fightStile = fightStile;
        this.devilFruit = devilFruit;
        this.dream = dream;
    }


    get getName() { return this.name };
    get getPicture() { return this.picture };
    get getPossition() { return this.possition };
    get getFightStile() { return this.fightStile };
    get getDevilFruit() { return this.devilFruit };
    get getDream() { return this.dream };
    introduce() {
        return (
            "I am " +
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
    assighFromJson(pirate) {
        this.name = pirate.name;
        this.picture = pirate.picture;
        this.fightStile = pirate.fightStile;
        this.devilFruit = pirate.devilFruit;
        this.dream = pirate.dream;
    }
}

export class Captain extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Captain", fightStile, devilFruit, dream);
    }
}
export class ViceCaptain extends Pirate {
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "ViceCaptain", fightStile, devilFruit, dream);
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
    constructor(name, picture, fightStile, devilFruit, dream) {
        super(name, picture, "Doctor", fightStile, devilFruit, dream);
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