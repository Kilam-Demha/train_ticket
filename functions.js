import {trips} from "./data.js" ;
import promptSync from "prompt-sync";
// show all traject

const tickets = [];
const prompt = promptSync();
let id = 1;
let place = 1;
const promtInput = (message)=>{
const input = prompt(message);
return input;
   
}

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


         
             

     console.log(`${id.toString().padEnd( 10," ")}${departure.padEnd(18, " ")}${destination.padEnd( 16, " ")}${departureTime.padEnd(18 , " ")}${arrivalTime.padEnd(8, " ")}${price.toString().padStart(10, " ")}${availableSeats.toString().padStart(15, " ")} `);

     
    })




    console.log("\n");
    


}


// acheter un ticket


const AcheterUnTickit = ()=>{

    let name = promtInput("Entrer votre nom : ");
    let tripId = promtInput("Entrer identifient de votre trip : ");


    

    let findTrip = trips.find(trip=>{
        return trip?.id === +tripId;
    })
    
    
    if(findTrip === undefined) 
        {
            console.log(colors.red + "Trajet introuvable !!!" + colors.reset);
            return false;
        }
        
        
        
        if(findTrip.availableSeats === 0){
            findTrip.availableSeats = `${colors.red}${"Plien".padStart(16, " ")}${colors.reset}` ;           
            console.log(colors.red + "Le train est complet !!!" + colors.reset);
            return false;
    
    
    
        }

        const newTicket = {
            id : id++,
            passagerName : name ,
            tripId,
            seatNumber : place++,
             price : findTrip.price + "DH",  
        }

    
    
        tickets.push(newTicket);



        
        
        
        findTrip.availableSeats--;
        
        
        
                
                
               

}


export {
promtInput,
MenuPrincipale,
AficherLesTrajects,
AcheterUnTickit
}