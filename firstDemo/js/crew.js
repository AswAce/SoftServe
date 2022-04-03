 export class Crew {
     constructor(name, flag, ship, captain, ...members) {
         this.name = name;
         this.flag = flag;
         this.ship = ship;
         this.captain = captain
         this.members = members;
     }
 }