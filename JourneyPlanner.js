//Plan your journey if there isn't any bus stop close to your postcode.
const from = "RM112HN"
const to = "RM112SU"
const response = await fetch(`https://api.digital.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`);
//no response from api https://api.tfl.gov.uk/swagger/ui/index.html#!/Journey/Journey_JourneyResults