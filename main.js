async function getLatLong(postcode, stopTypes, noOfStops) {
    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    let postcodeInfo = await postCodesAPIResponse.json();
    let lat = postcodeInfo.result.latitude;
    let lon = postcodeInfo.result.longitude;
    seeBusByStopCode(lat, lon, stopTypes,noOfStops);
}
async function seeBusByStopCode(lat, lon, stopTypes, noOfStops) {
    let tflStopCodeAPIresponse = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${lon}&stopTypes=${stopTypes}`);
    let stopCodeData = await tflStopCodeAPIresponse.json();
    console.log(stopCodeData);
    for (let i = 0; i < noOfStops; i++) {
        const busStop = stopCodeData.stopPoints[i].id;
        let tflBusStopsAPIResponse = await fetch(`https://api.tfl.gov.uk/StopPoint/${busStop}/Arrivals`);
        let tflBusStops = await tflBusStopsAPIResponse.json();
        for (let busInfo of tflBusStops) {
            console.log(busInfo.stationName, busInfo.expectedArrival, busInfo.destinationName);
        }
    }

}
getLatLong("RM11 2SU", "NaptanPublicBusCoachTram", 2);