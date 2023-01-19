//Plan your journey if there isn't any bus stop close to your postcode.
const from = "RM112HN"
const to = "RM112SU"
const response = await fetch(`https://api.digital.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`);
