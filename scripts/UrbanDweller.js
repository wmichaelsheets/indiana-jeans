import { setSocioLocationId } from "./TransientState.js"



 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
        
    }
}





export const LocationTypeChoices = async () => {
    const response = await fetch ("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let choicesHTML = "<h2>Which type of area do you live in?</h2>"
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }


    return choicesHTML
    
}