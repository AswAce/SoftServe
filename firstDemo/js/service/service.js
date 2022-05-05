import { getAllObjectsFromDb } from '../repository/repository.js'
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
} from "../enteties/pirate.js";
import { Crew } from "../enteties/crew.js";
var crewName = "StrawHats";
var crewFlag = "../js/files/straw-hats/flag.png";
var crewShip = "../js/files/straw-hats/Thousand_Sunny_Infobox.webp";
var captain = new Captain("Luffy", "../js/files/straw-hats/luffy.jpg", "punch and kicks", "Ruber man", "Become pirate king")

let crewMembers = await createPirates(await getAllObjectsService());
var strawHatCrew = factoryCrew(crewName, crewFlag,
    crewShip, captain, crewMembers.crew)

export function returnStrawHatCrew() {

    return strawHatCrew;
}

function factoryCrew(crewName, crewFlag, crewShip, captain, crew) {
    return new Crew(crewName, crewFlag, crewShip, captain, crew);
}

async function getAllObjectsService() {

    let objects = await getAllObjectsFromDb();
    return await (objects)
}


async function createPirates(pirates) {
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