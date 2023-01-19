
import { seeBusByStopCode } from "./BusByStopCode.js";

export async function getLocation(postcode, stopTypes) {
    let postCodesAPIResponse = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    let postcodeInfo = await postCodesAPIResponse.json();
    let lat = postcodeInfo.result.latitude;
    let lon = postcodeInfo.result.longitude;
    seeBusByStopCode(lat, lon, stopTypes);
}