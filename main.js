
import { getLocation } from "./Location.js";
import { getNearByBusStops } from "./BusByStopCode.js";
import readline from 'readline-sync';

async function getBusDetails(postcode) {
    const postcodeResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}/validate`);
    const postcodeDetails = await postcodeResponse.json();
    if (postcodeDetails.result) {
        const regionlatlon = await getLocation(postcode);
        // to get no.of bus stops close by
        if (regionlatlon[0] != "London") {
            console.log("Enter a postcode with in London");
            process.exit();
        }
        else {
            getNearByBusStops(regionlatlon[1], regionlatlon[2]);
        }
    }
    else {
        console.log("Enter a valid Postcode")
    }
}
// get input from user 
console.log('Please enter postcode:');
let postcode = readline.prompt();

//check for valid post code and get lat & lon details 
getBusDetails(postcode);