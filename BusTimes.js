export async function getBusTimes(stopCodeData, noOfBusStops) {
    for (let i = 0; i < noOfBusStops; i++) {
        const busStopId = stopCodeData.stopPoints[i].id;
        let tflBusStopsAPIResponse = await fetch(`https://api.tfl.gov.uk/StopPoint/${busStopId}/Arrivals`);
        const stopname = stopCodeData.stopPoints[i].commonName;
        console.log("-------------------------------------");
        console.log(`Buses at ${stopname} stop`);
        console.log("-------------------------------------");
        if (tflBusStopsAPIResponse.ok) {
            const tflBusStops = await tflBusStopsAPIResponse.json();
            // tflBusStops => tflBusStops.sort((arrivalA, arrivalB) => arrivalA.timeToStation - arrivalB.timeToStation).slice(0, 5);

            // checking if no.of arrivals in less than or equal to 5
            for (let i = 0; (i < tflBusStops.length && i < 5); i++) {
              //  console.log(tflBusStops[i].timeToStation);
                const time = Math.round(tflBusStops[i].timeToStation / 60).toString().padStart(3);
                console.log(`${tflBusStops[i].lineName}   ${time} mins   ${tflBusStops[i].destinationName}`);
            }
        }
        else {
            console.log("No buses comming soon!!")
        }
    }
}
