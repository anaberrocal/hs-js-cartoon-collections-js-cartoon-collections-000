function dwarfRollCall(dwarves) {
  let dwarvesArray = [];
  for ( let i = 0 ; i < dwarves.length; i++)
  {

     dwarvesArray.push(`${i + 1}. ${dwarves[i]} `);

  }
  return dwarvesArray.join('');
};

function summonCaptainPlanet(planeteerCalls){
  let planeteerArray = [];
  for (let i = 0; i < planeteerCalls.length; i++)
  {
    planeteerArray.push(`${planeteerCalls[i].toUpperCase()}!`);
  }
  return planeteerArray;
};

function longPlaneteerCalls(words) {
  for ( let i = 0; i < words.length; i++ )
  {
    if(words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
};

function findTheCheese (foods) {
  let cheese = "no cheese!";

   for ( let i = 0; i < foods.length; i++) {

    if ( foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
       return foods[i];
    }
  }
  return cheese;
 };
