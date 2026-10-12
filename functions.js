import { trips } from "./data.js";
import promptSync from "prompt-sync";
import { isOriginName } from "./testFunctions.js";

// show all traject

const tickets = [];
const prompt = promptSync();
let id = 1;
let place = 1;
const promtInput = (message) => {
    const input = prompt(message);
    return input;

}

const colors = {

    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    violet: "\x1b[35m",
    bold: "\x1b[1m",
    reset: "\x1b[0m",



}


const MenuPrincipale = () => {

    console.log("1-Aficher les trajects");
    console.log("2-Achetter un ticket");
    console.log("3-afficher les ticket");
    console.log("4-Anuller  un ticket");
    console.log("5-Rechercher un ticket");
    console.log("6-filtrer les trajects");
    console.log("0-Quitter");

}



const AficherLesTrajects = () => {
    console.log(colors.cyan + colors.bold + "   ID    |   Departure  |  Destination    |  DepartureTime  |  ArrivalTime  |  Price   |  AvailableSeats" + colors.reset);
    console.log(colors.cyan + colors.bold + "=========|==============|=================|=================|===============|==========|=================" + colors.reset)
    trips.forEach(trip => {

        const { id, departure,
            destination,
            departureTime, arrivalTime,
            price, availableSeats } = trip;





        console.log(`${id.toString().padEnd(10, " ")}${departure.padEnd(18, " ")}${destination.padEnd(16, " ")}${departureTime.padEnd(18, " ")}${arrivalTime.padEnd(8, " ")}${price.toString().padStart(10, " ")}${availableSeats.toString().padStart(15, " ")} `);
            console.log(colors.cyan + colors.bold + "_________|______________|_________________|_________________|_______________|__________|_________________" + colors.reset)
        

    })




    console.log("\n");



}


// acheter un ticket


const AcheterUnTickit = () => {

    let name = promtInput("Entrer votre nom : ");
    let tripId = promtInput("Entrer identifient de votre trip : ");




    let findTrip = trips.find(trip => {
        return trip?.id === +tripId;
    })


    if (findTrip === undefined) {
        console.log(colors.red + "Trajet introuvable !!!" + colors.reset);
        return false;
    }



    if (findTrip.availableSeats === 0) {
        findTrip.availableSeats = `${colors.red}${"Plien".padStart(16, " ")}${colors.reset}`;
        console.log(colors.red + "Le train est complet !!!" + colors.reset);
        return false;



    }

    const newTicket = {
        id: id++,
        passengerName: name,
        tripId: +tripId,
        seatNumber: place++,
        price: findTrip.price,
    }



    tickets.push(newTicket);


    findTrip.availableSeats--;


}



const AficherLesTicket = () => {

    if (tickets.length === 0) {
        console.log(colors.red + "Aucun Ticket Enregistré !!! " + colors.reset);
        return false;
    }




    console.log(colors.bold + colors.yellow + "\t\tTouts Les Tickets\n" + colors.reset);

    tickets.forEach(ticket => {

        const { id, passengerName, tripId, seatNumber, price } = ticket;
        console.log(colors.yellow + "===================================" + colors.reset);

        console.log(`Id              : ${id}`);
        console.log(`Nom De Passager : ${passengerName}`);
        console.log(`Id De Traget    : ${tripId}`);
        console.log(`Nomber De Place : ${seatNumber}`);
        console.log(`Prix            : ${price}DH`);

        console.log(colors.yellow + "===================================" + colors.reset);


    })

}





const AnullerUnTicket = () => {
    if (tickets.length === 0) {
        console.log(colors.red + "Aucun Ticket Enregistré !!! " + colors.reset);
        return false;
    }

    const inputId = promtInput("Veuillez Entrer l'Id De Voutre ticket :");


    const findId = tickets.findIndex((ticket) => {

        return ticket.id === +inputId;
    })



    if (findId === -1) {
        console.log(colors.red + "Trajet introuvable !!!" + colors.reset);
        return false;
    }

    trips[tickets[findId].tripId - 1].availableSeats++;





    tickets.splice(findId, 1);

    console.log(colors.green + "Ticket a eté anuller en succéss " + colors.reset);


}



const RechercherUnTicket = () => {


    if (tickets.length === 0) {
        console.log(colors.red + "Aucun Ticket Enregistré !!! " + colors.reset);
        return false;
    }




    const name = promtInput("Entrer votre nom : ");
     


    
    

    const filterTicket = tickets.filter(ticket =>{


    return isOriginName(name  , ticket.passengerName)

       
    }); 



    if(filterTicket.length === 0){
        console.log(colors.red + "Aucun ticket avec cette nom !!!" + colors.reset);
        return false;
        
    }






for(const ticket of filterTicket){

    const {id , passengerName , tripId , seatNumber , price} = ticket;


    console.log(colors.cyan + colors.bold + " ID |Nom De Passager|Id De Traget|Nomber De Place| Prix " + colors.reset);
    console.log(colors.cyan + colors.bold + "====|===============|============|===============|======" + colors.reset);
    
    console.log(`${colors.yellow}${id.toString().padEnd(10, " ")}${passengerName.padEnd(18, " ")}${tripId.toString().padEnd(10, " ")}${seatNumber.toString().padEnd(10, " ")}${price.toString().padStart(6, " ")}Dh${colors.reset}`);
    
    
}

    
    



}



const FiltrerLesTrajects = ()=>{

    for(let i = 0 ; i < trips.length -1 ; i+=1)
     {
        for(let j = i + 1 ; j < trips.length ; j++)
        {

            if(trips[i].price > trips[j].price)
            {
                let temp = trips[i];it 
                trips[i] = trips[j];
                trips[j] = temp;
                
            }
        }
     }

     console.log(colors.cyan + colors.bold + "   ID    |   Departure  |  Destination    |  DepartureTime  |  ArrivalTime  |  Price   |  AvailableSeats" + colors.reset);
    console.log(colors.cyan + colors.bold + "=========|==============|=================|=================|===============|==========|=================" + colors.reset)
    
    
    for(const trip of trips){
        
        const { id, departure,
            destination,
            departureTime, arrivalTime,
            price, availableSeats } = trip;
            
            
            
            console.log(`${id.toString().padEnd(10, " ")}${departure.padEnd(18, " ")}${destination.padEnd(16, " ")}${departureTime.padEnd(18, " ")}${arrivalTime.padEnd(8, " ")}${price.toString().padStart(10, " ")}${availableSeats.toString().padStart(15, " ")} `);
            console.log(colors.cyan + colors.bold + "_________|______________|_________________|_________________|_______________|__________|_________________" + colors.reset)
        }
        
        


     


}

export {
    promtInput,
    MenuPrincipale,
    AficherLesTrajects,
    AcheterUnTickit,
    AficherLesTicket,
    AnullerUnTicket,
    RechercherUnTicket,
    FiltrerLesTrajects
}