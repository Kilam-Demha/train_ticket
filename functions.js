import {trips} from "./data.js" ;
// show all traject


const MenuPrincipale = ()=>{

    console.log("1-Aficher les trajects");
    console.log("2-Achetter un ticket");
    console.log("3-afficher les ticket");
    console.log("4-Anuller  un ticket");
    console.log("5-Rechercher un ticket");
    console.log("6-filtrer les trajects");
    console.log("0-Quitter");
    
}



function exit(){
    return false;
}






export {
MenuPrincipale,
exit

}