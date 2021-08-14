let car = {
    brand : "Audi",
    model : "Quattro",
    year : "",
    color : "green",
    revs_engine : function(){
      console.log("Vroom Vroom");
      return true
    },
    get clr() {
      return this.language;
    },
    set yr(yr) {
      this.year = yr;
    },
};
car.col
car.yr = "1988"

let sports_team = {
    name : "",
    location : "Oklahoma City",
    star_player : "Shai Gilgeous-Alexander",
    inaugural_season : "2008-09",
    team_chant : function(){
      console.log("Thunder Up!")
      return true
    },
    get locay() {
      return this.location;
    },
    set nme(nme) {
      this.name = nme;
    }
};
sports_team.locay
sports_team.nme = "Thunder"

let animal = {
    species : "Octopus Vulgaris",
    environment : "sea",
    limb_count : 8,
    dietary : "",
    name : function(){
      console.log("Oswald")
      return true
    },
    get limbs() {
      return this.limb_count;
    },
    set diet(diet) {
      this.dietary = diet;
    },
};
animal.limbs
animal.diet = "crustaceans and molluscs"
