// FUNCTION #1 - "DWARF ROLL CALL":
//Takes array and returns a single string with array elements in numeric order
function dwarfRollCall(dwarves) {
    let newDwarvesArray = [];
    for ( let i = 0; i < dwarves.length; i++) {
      newDwarvesArray.push(`${i + 1}. ${dwarves[i]} `)
    }
    return newDwarvesArray.join('');
  };


  //FUNCTION #2 - "SUMMON CAPTAIN PLANET":
  //Takes an array of strings and returns a new array of strings in upper case appended by a exclamation mark
  function summonCaptainPlanet(planeteerCalls) {
    let planeteerArray = [];
    for ( let i = 0; i < planeteerCalls.length; i++) {
      planeteerArray.push(`${planeteerCalls[i].toUpperCase()}!`);
    }
    return planeteerArray;
  };


  //FUNCTION #3 - "LONG PLANETEER CALLS":
  //Checks if any string in provided array has more than 4 characters
  function longPlaneteerCalls(words) {
     let planeteerCalls = false;
    for ( let i = 0; i < words.length; i++){
      if ( words[i].length > 4){
        planeteerCalls =  true;
      }
     }
     return planeteerCalls;
   };


  //FUNCTION #4 - "FIND THE CHEESE":
  //Takes array of strings and returns the first cheese it finds in the array otherwise returns no cheese if there aren't any
  function findTheCheese(foods) {
  for ( let i = 0; i < foods.length; i++){
    if( foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert" || foods[i] === "swiss" ) {
      return foods[i];
    }
   }
   return "no cheese!";

  };
