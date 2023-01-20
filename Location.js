
//import { seeBusByStopCode } from "./BusByStopCode.js";

export async function getLocation(postcode) {
    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    let postcodeInfo = await postCodesAPIResponse.json();
    let lat = postcodeInfo.result.latitude;
    let lon = postcodeInfo.result.longitude;
    let region = postcodeInfo.result.region;
    return [region, lat, lon];

}