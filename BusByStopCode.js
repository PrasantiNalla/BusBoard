import { getBusTimes } from "./BusTimes.js";
export async function seeBusByStopCode(lat, lon, stopTypes) {
    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=${stopTypes}`);
    let stopCodeData = await tflStopCodeAPIresponse.json();
    const noOfBusStops = stopCodeData.stopPoints.length;
    if (noOfBusStops >= 2) {
        getBusTimes(stopCodeData, 2);
    }
    else if (noOfBusStops === 1) {
        getBusTimes(stopCodeData, 1);
    }
    else {
        console.log("No Bus stops close by");
    }
}