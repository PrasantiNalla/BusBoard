export async function getBusTimes(stopCodeData, noOfBusStops) {
    for (let i = 0; i < noOfBusStops; i++) {
        const busStopId = stopCodeData.stopPoints[i].id;
        let tflBusStopsAPIResponse = await fetch(`https://api.tfl.gov.uk/StopPoint/${busStopId}/Arrivals`);

        if (tflBusStopsAPIResponse.ok) {
            const tflBusStops = await tflBusStopsAPIResponse.json();
            for (let i = 0; i < 5; i++) {
                const time = tflBusStops[i].expectedArrival.slice(11, 19);
                console.log(`Bus ${tflBusStops[i].lineName} ${time}   ${tflBusStops[i].destinationName}`);
            }
        }
        else {
            console.log("No buses comming soon!!")
        }
    }
}
