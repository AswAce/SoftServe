import {
    Pirate,
    Navigator,
    Doctor,
    Captain,
    ViceCaptain,
    Cook,
    Sniper,
    Musician,
    ShipMechanic,
    Archelogist,
    Pilot
} from "./pirate.js"
import { Crew } from "./crew.js"
import { Ark } from "./ark.js"

var captain = new Captain("Luffy", "./files/straw-hats/luffy.jpg", "punch and kicks", "Ruber man", "Become pirate king")
var navigator = new Navigator("Nami", "./files/straw-hats/nami.jpg", "Weather control", "No", "Draw a map of the world")
var vicecaptain = new ViceCaptain("Zoro", "./files/straw-hats/zoro.png", "Three sword style", "No", "Greatest swordsman")
var cook = new Cook("Sanji", "./files/straw-hats/sanji.jpg", "Kicks", "No", "Find all blue")
var sniper = new Sniper("Usopp", "./files/straw-hats/usopp.webp", "Sniper slingshot", "No", "Become Bravest hero")
var doctor = new Doctor("Chopper", "./files/straw-hats/chopper.webp", "Transformations", "Three ponts transpormation", "Find cure for all illnesses")
var archelogist = new Archelogist("Robin", "./files/straw-hats/robin.webp", "multiply hands and feets", "sprout duplicates of any body parts", "Find the void history")
var shipMechanic = new ShipMechanic("Franky", "./files/straw-hats/frnaky.webp", "Cyborg wepons", "no", "Build greatest ship")
var pilot = new Pilot("Jinbei", "./files/straw-hats/Jinbe.webp", "Fishman karate", "no", "To help Luffy")
var musician = new Musician("Brook", "./files/straw-hats/brook.webp", "music and sword", "Imortality", "Meet with Laboon")
var crewName = "StrawHats";
var crewFlag = "./files/straw-hats/flag.png";
var crewShip = "./files/straw-hats/Thousand_Sunny_Infobox.webp";

var strawHatCrew = createACrew(crewName, crewFlag,
    crewShip, captain, navigator,
    vicecaptain, sniper, cook,
    doctor, archelogist, pilot, shipMechanic, musician)




function createACrew(crewName, crewFlag, crewShip,
    captain, navigator, vicecaptain,
    cook, sniper, doctor, archelogist,
    shipMechanic, pilot, musician) {
    var crew = new Crew(crewName, crewFlag, crewShip, captain, vicecaptain, navigator, cook,
        sniper, doctor, archelogist,
        pilot, shipMechanic, musician)

    return crew;
}