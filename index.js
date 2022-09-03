function scuberGreetingForFeet(fee){
  let scuberGreetingForFeet;

  if (fee <= 400) {
    scuberGreetingForFeet = "This one is on me!"
  }
  else if (fee <=1999) {
    scuberGreetingForFeet = "That will be twenty bucks."
      }
  else if (fee <=2500) {
    scuberGreetingForFeet = "I will gladly take your thirty bucks."
  }
  else if (fee >=2501) {
    scuberGreetingForFeet = "No can do."
  }
  return scuberGreetingForFeet;

}

function ternaryCheckCity(city){
  
  return city = (city === "NYC") ? ("Ok, sounds good.") : ("No go.")
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return "Thank you so much.";
        break;
    case "not as generous":
      return "Thank you.";
        break;
    default:
      return "Bye."



  }

}