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
            // checking if no.of arrivals in less than or equal to 5
            for (let i = 0; (i < tflBusStops.length && i < 5); i++) {
                const time = tflBusStops[i].expectedArrival.slice(11, 19);

                console.log(`${tflBusStops[i].lineName}   ${time}   ${tflBusStops[i].destinationName}`);

            }
        }
        else {
            console.log("No buses comming soon!!")
        }
    }
}
