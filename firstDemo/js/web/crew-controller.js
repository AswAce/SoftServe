import { returnStrawHatCrew } from "../service/service.js"

createDomElemntForACrew(returnStrawHatCrew())

$(document).ready(function() {
    $(".effect").click(function() {

        $(this).next().toggle();
        console.log("Works sas")
    });
});



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