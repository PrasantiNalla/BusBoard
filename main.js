
import { getLocation } from "./Location.js";
import { getNearByBusStops } from "./BusByStopCode.js";
import readline from 'readline-sync';

async function getBusDetails(postcode) {
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}/validate`);
    const postcodeDetails = await postcodeResponse.json();
    if (postcodeDetails.result) {
        const latlon = await getLocation(postcode);
        // to get no.of bus stops close by
        getNearByBusStops(latlon[0], latlon[1]);
    }
    else {
        console.log("Invalid Postcode.")
    }
}
// get input from user 
console.log('Please enter postcode:');
let postcode = readline.prompt();

//check for valid post code and get lat & lon details 
getBusDetails(postcode);