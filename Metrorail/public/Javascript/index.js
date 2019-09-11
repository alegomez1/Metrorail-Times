const proxy = 'https://cors-anywhere.herokuapp.com/'
const api = `http://miami-transit-api.herokuapp.com/api/TrainTracker.json`

fetch(api).then(response =>{
    return response.json();
}).then(data => {
console.log(data)
//Dadeland Info
const dadeland = data.RecordSet.Record[6]
const dadelandFirstNorthBoundTrainTime = dadeland.NB_Time1
const dadelandFirstNorthBoundTrainArrival = dadeland.NB_Time1_Arrival
const dadelandSecondtNorthBoundTrainTime = dadeland.NB_Time2
const dadelandSecondNorthBoundTrainArrival = dadeland.NB_Time2_Arrival

document.querySelector("body > div:nth-child(3) > h5:nth-child(2)").innerText += ` ${dadelandFirstNorthBoundTrainTime}.....ETA: ${dadelandFirstNorthBoundTrainArrival}`
document.querySelector("body > div:nth-child(3) > h5:nth-child(3)").innerText += ` ${dadelandSecondtNorthBoundTrainTime}.....ETA: ${dadelandSecondNorthBoundTrainArrival}`


//Brickell Info
const brickell = data.RecordSet.Record[1]
//North Trains
const brickellFirstNorthBoundTrainTime = brickell.NB_Time1
const brickellFirstNorthBoundTrainArrival = brickell.NB_Time1_Arrival
const brickellSecondtNorthBoundTrainTime = brickell.NB_Time2
const brickellSecondNorthBoundTrainArrival = brickell.NB_Time2_Arrival

document.querySelector("body > div:nth-child(6) > h5:nth-child(2)").innerText += ` ${brickellFirstNorthBoundTrainTime}.....ETA: ${brickellFirstNorthBoundTrainArrival}`
document.querySelector("body > div:nth-child(6) > h5:nth-child(3)").innerText += ` ${brickellSecondtNorthBoundTrainTime}.....ETA: ${brickellSecondNorthBoundTrainArrival}`
//South Trains
const brickellFirstSouthBoundTrainTime = brickell.SB_Time1
const brickellFirstSouthBoundTrainArrival = brickell.SB_Time1_Arrival
const brickellSecondtSouthBoundTrainTime = brickell.SB_Time2
const brickellSecondSouthBoundTrainArrival = brickell.SB_Time2_Arrival




})


console.log("Script ran")