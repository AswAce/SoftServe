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
    Pilot
} from "./pirate.js"
import { Crew } from "./crew.js"
import { Ark } from "./ark.js"

var captain = new Captain("Luffy", "../js/files/straw-hats/luffy.jpg", "punch and kicks", "Ruber man", "Become pirate king")
var navigator = new Navigator("Nami", "../js/files/straw-hats/nami.jpg", "Weather control", "No", "Draw a map of the world")
var vicecaptain = new ViceCaptain("Zoro", "../js/files/straw-hats/zoro.png", "Three sword style", "No", "Greatest swordsman")
var cook = new Cook("Sanji", "../js/files/straw-hats/sanji.jpg", "Kicks", "No", "Find all blue")
var sniper = new Sniper("Usopp", "../js/files/straw-hats/usopp.webp", "Sniper slingshot", "No", "Become Bravest hero")
var doctor = new Doctor("Chopper", "../js/files/straw-hats/chopper.jpg", "Transformations", "Three ponts transpormation", "Find cure for all illnesses")
var archelogist = new Archelogist("Robin", "../js/files/straw-hats/robin.webp", "multiply hands and feets", "sprout duplicates of any body parts", "Find the void history")
var shipMechanic = new ShipMechanic("Franky", "../js/files/straw-hats/frnaky.webp", "Cyborg wepons", "no", "Build greatest ship")
var pilot = new Pilot("Jinbei", "../js/files/straw-hats/Jinbe.webp", "Fishman karate", "no", "To help Luffy")
var musician = new Musician("Brook", "../js/files/straw-hats/brook.webp", "music and sword", "Imortality", "Meet with Laboon")
var crewName = "StrawHats";
var crewFlag = "../js/files/straw-hats/flag.png";
var crewShip = "../js/files/straw-hats/Thousand_Sunny_Infobox.webp";

var strawHatCrew = factoryCrew(crewName, crewFlag,
    crewShip, captain, vicecaptain, navigator,
    sniper, cook,
    doctor, archelogist, pilot, shipMechanic, musician)

createDomElemntForACrew(strawHatCrew)




function factoryCrew(crewName, crewFlag, crewShip,
    captain, ...crew) {
    return new Crew(crewName, crewFlag, crewShip, captain, ...crew);
}


function createDomElemntForACrew(crew) {
    var element = document.getElementsByClassName("crew-show")[0]

    element.innerHTML += `<div class="center"><H2>` + crew.getName + `</H2></div>`
    element.innerHTML += ` 
    
            <img src="../js/files/straw-hats/flag.png" alt=""> 
            <img src="../js/files/straw-hats/Thousand_Sunny_Infobox.webp" alt=""> 

         `




    var all = document.querySelector("body > div.accordion")
    console.log(all)
    all.innerHTML += createMember(crew.getCaptain)

    crew.getMembers.forEach(element => {
        all.innerHTML += createMember(element)
    });



    function createMember(member) {
        return `<div class="box"> <img src =` + member.getPicture + ` alt = "" >
<div class = "text">
            <h2 class = "center" >` + member.getName + `</h2>

        <p>` + member.introduce() + `</p>

        </div> </div>`
    }
}