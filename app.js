//  import paths
import promptSync from "prompt-sync";
import { exit, MenuPrincipale } from "./functions.js";

// input user
const prompt = promptSync();

let isOut = true;
let isExit;

do{


MenuPrincipale();


    
   let  input = prompt("veuillez choisir : ");


    switch(input){

        case '1' : 
        break;

        case '2' : 
        break;

        case '3' : 
        break;

        case '4' : 
        break;

        case '5' : 
        break;

        case '6' : 
        break;


        case '0' : 
        process.exit(0);
        
        break;


        default :
   
         console.log("input invalid !!!");
        
    }





   
     console.log(  elements.includes(input));
     
     

     isExit = prompt("exit (y/n) : ");
     if(isExit === 'y' || isExit === 'Y'){
        isOut = false;
     }



}while(isOut)
