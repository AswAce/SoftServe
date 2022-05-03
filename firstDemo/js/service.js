import { getAllObjectsFromDb } from '../js/repository.js'
import {
    Navigator,
    Doctor,
    Captain,
    ViceCaptain,
    Cook,
    Sniper,
    Musician,
    ShipMechanic,
    Archelogist,
    Pilot,
} from "./pirate.js";

export async function getAllObjectsController() {

    let objects = await getAllObjectsFromDb();



    return await (objects)
}

export async function createPirates(pirates) {
    let createdPirates = new Array;

    pirates.forEach((element) => {
        createdPirates.push(pirateFactory(element))

    });
    let a = await Promise.all(createdPirates).then((values) => {

        let captain = getCaptain(values)

        removePirate(values)
        let crew = {
            captain: captain,
            crew: values

        }

        return crew;
    })


    return a;
}

async function pirateFactory(pirate) {
    switch (pirate.possition) {
        case "captain":
            let captain = new Captain();
            captain.assighFromJson(pirate);
            return captain;
        case "sniper":
            let sniper = new Sniper();
            sniper.assighFromJson(pirate);
            return sniper;
        case "archelogis":
            let archelogis = new Archelogist();
            archelogis.assighFromJson(pirate);
            return archelogis;
        case "pilot":
            let pilot = new Pilot();
            pilot.assighFromJson(pirate);
            return pilot;
        case "musician":
            let musician = new Musician();
            musician.assighFromJson(pirate);
            return musician;
        case "shipMechanic":
            let shipMechanic = new ShipMechanic();
            shipMechanic.assighFromJson(pirate);
            return shipMechanic;
        case "cook":
            let cook = new Cook();
            cook.assighFromJson(pirate);
            return cook;
        case "vice-captain":
            let viceCaptain = new ViceCaptain();
            viceCaptain.assighFromJson(pirate);
            return viceCaptain;
        case "doctor":
            let doctor = new Doctor();
            doctor.assighFromJson(pirate);
            return doctor;
        case "navigator":
            let navigator = new Navigator();
            navigator.assighFromJson(pirate);
            return navigator;
    }

}

async function getCaptain(createdPirates) {
    let captain;
    createdPirates.forEach(element => {

        if (element.possition === 'Captain') {
            captain = element;
        }
    });
    return captain;
}
async function removePirate(createdPirates) {
    for (var i = 0; i < createdPirates.length; i++) {

        if (createdPirates[i].possition === "Captain") {

            createdPirates.splice(i, 1);
        }
    }
}