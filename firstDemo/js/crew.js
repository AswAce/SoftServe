 export class Crew {
     constructor(name, flag, ship, captain, ...members) {
         this.name = name;
         this.flag = flag;
         this.ship = ship;
         this.captain = captain
         this.members = members;
     }

     get getName() {
         return this.name
     }
     get getFlag() {
         return this.flag
     }
     get getShip() {
         return this.ship
     }
     get getCaptain() {
         return this.captain
     }
     get getMembers() {
         return this.members
     }
 }