export async function getBusTimes(stopCodeData, noOfBusStops) {
    for (let i = 0; i < noOfBusStops; i++) {
        const busStopId = stopCodeData.stopPoints[i].id;
        let tflBusStopsAPIResponse = await fetch(`https://api.tfl.gov.uk/StopPoint/${busStopId}/Arrivals`);
        let tflBusStops = await tflBusStopsAPIResponse.json();
        for (let i = 0; i < 5; i++) {
            console.log(tflBusStops[i].lineName, tflBusStops[i].expectedArrival, tflBusStops[i].destinationName);
        }
    }
}
