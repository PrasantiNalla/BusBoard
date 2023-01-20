import { getBusTimes } from "./BusTimes.js";
export async function getNearByBusStops(lat, lon) {
 
    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=NaptanPublicBusCoachTram`);
    let stopCodeData = await tflStopCodeAPIresponse.json();
   
    const noOfBusStops = stopCodeData.stopPoints.length;
    if (noOfBusStops >= 2) {
        getBusTimes(stopCodeData, noOfBusStops);
    }
    else if (noOfBusStops === 1) {
        getBusTimes(stopCodeData, noOfBusStops);
    }
    else {
        console.log("No Bus stops close by");
    }
}
