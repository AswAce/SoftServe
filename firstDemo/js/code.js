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
import { Crew } from "./crew.js";
import { getAllObjectsController } from "../js/controller.js";

var crewName = "StrawHats";
var crewFlag = "../js/files/straw-hats/flag.png";
var crewShip = "../js/files/straw-hats/Thousand_Sunny_Infobox.webp";
let crewMembers = await createPirates(await getAllObjectsController());


var captain = new Captain("Luffy", "../js/files/straw-hats/luffy.jpg", "punch and kicks", "Ruber man", "Become pirate king")
var strawHatCrew = factoryCrew(crewName, crewFlag,
    crewShip, captain, crewMembers.crew)
createDomElemntForACrew(strawHatCrew)

$(document).ready(function() {
    $(".effect").click(function() {

        $(this).next().toggle();
        console.log("Works sas")
    });
});

function factoryCrew(crewName, crewFlag, crewShip, captain, crew) {
    return new Crew(crewName, crewFlag, crewShip, captain, crew);
}

function createDomElemntForACrew(crew) {
    console.log(crew.getCaptain)
    console.log(crew.getMembers)

    let element = document.querySelector("body > div.crew-show.center");
    console.log(element)
    element.innerHTML +=
        `<div class="center"><H2>` + crew.getName + `</H2></div>`;
    element.innerHTML += ` 
            <img src="../js/files/straw-hats/flag.png" alt=""> 
            <img src="../js/files/straw-hats/Thousand_Sunny_Infobox.webp" alt=""> 
         `;
    let all = document.querySelector("body > div.accordion");
    all.innerHTML += createMember(crew.getCaptain);

    crew.getMembers.forEach((element) => {
        all.innerHTML += createMember(element);
    });

    function createMember(member) {
        console.log(member)
        console.log("member")
        return (
            `<div class="box"> <img src =` +
            member.getPicture +
            ` alt = "" >
<div class = "text">
<div class="center"> <h2 class = "center" >` +
            member.getName +
            `</h2></div>

            <button class="effect">More</button>
        <p class="information hide">` +
            member.introduce() +
            `</p>

        </div> </div>`
        );
    }
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