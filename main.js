
import { getLocation } from "./Location.js";
import readline from 'readline-sync';

async function getBusDetails(postcode, stopTypes) {
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}/validate`);
    const postcodeDetails = await postcodeResponse.json();
    if (postcodeDetails.result) {
        getLocation(postcode, stopTypes);
    }
    else {
        console.log("Invalid Postcode.")
    }
}
console.log('Please enter postcode:');
let postcode = readline.prompt();
console.log('Please enter stop type:')
let stoptype = readline.prompt();//NaptanPublicBusCoachTram
getBusDetails(postcode, stoptype);