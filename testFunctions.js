
export const isOriginName = (name, orName) =>{
    name = name.split('');
    orName = orName.split('');

    if (name.length !== orName.length) {

        return null;    }

    for (let i = 0; i < name.length; i++) {
        if (name[i] > orName[i]) {
            name[i] = name[i].toUpperCase()
        } else if (name[i] < orName[i]) {
            name[i] = name[i].toLowerCase()
        } else {
            name[i] = name[i]
        }
    }

   
    

    return name.join("") === orName.join("");

}





