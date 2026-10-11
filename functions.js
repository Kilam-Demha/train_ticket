import {trips} from "./data.js" ;
// show all traject

const colors = {

  red    : "\x1b[31m" ,
  green  : "\x1b[32m" ,
  yellow : "\x1b[33m" ,
  cyan   : "\x1b[36m" ,
  gray   : "\x1b[31m" ,
  bold   : "\x1b[1m" ,
  reset  : "\x1b[0m" ,



}


const MenuPrincipale = ()=>{

    console.log("1-Aficher les trajects");
    console.log("2-Achetter un ticket");
    console.log("3-afficher les ticket");
    console.log("4-Anuller  un ticket");
    console.log("5-Rechercher un ticket");
    console.log("6-filtrer les trajects");
    console.log("0-Quitter");
    
}



const AficherLesTrajects = ()=>{
    console.log(colors.cyan+ colors.bold +"   ID    |   Departure  |  Destination    |  DepartureTime  |  ArrivalTime  |  Price   |  AvailableSeats"  + colors.reset);
    console.log(colors.cyan+ colors.bold +"=========|==============|=================|=================|===============|==========|=================" + colors.reset)
    trips.forEach(trip =>{
        
    const {id , departure ,
             destination , 
             departureTime , arrivalTime ,
             price , availableSeats} = trip;


         
             

     console.log(`${id.toString().padEnd( 10," ")}${departure.padEnd(18, " ")}${destination.padEnd( 18, " ")}${departureTime.padEnd(18 , " ")}${arrivalTime.padEnd(8, " ")}${price.toString().padStart(10, " ")}${availableSeats.toString().padStart(15, " ")} `);

     
    })




    console.log("\n");
    


}


export {
MenuPrincipale,
AficherLesTrajects

}