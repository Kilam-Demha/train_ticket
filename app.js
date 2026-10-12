//  import paths
import { MenuPrincipale , 
   AficherLesTrajects , 
   promtInput ,
   AcheterUnTickit , 
   AficherLesTicket ,
   AnullerUnTicket,
   RechercherUnTicket,
   FiltrerLesTrajects


} from "./functions.js";




let isOut = true;
let isExit;

do{


MenuPrincipale();


    
   // let  input = prompt("veuillez choisir : ");
    let input = promtInput("veuillez choisr : ");

   
   

    switch(input){

        case '1' : 
        AficherLesTrajects();
        break;
        
        case '2' : 
        AcheterUnTickit();
        break;
        
        case '3' : 
        AficherLesTicket();
        break;

        case '4' : 
        AnullerUnTicket();


        break;

        case '5' : 
        RechercherUnTicket();
        break;

        case '6' : 
        FiltrerLesTrajects();
        break;


        case '0' : 
        process.exit(0);
        
        break;


        default :
   
         console.log("input invalid !!!");
        
    }





   
     
     

     isExit = promtInput("exit (y/n) : ");
     if(isExit === 'y' || isExit === 'Y'){
        isOut = false;
     }



}while(isOut)
