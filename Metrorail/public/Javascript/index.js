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
const dadelandFSecondtNorthBoundTrainTime = dadeland.NB_Time2
const dadelandSecondNorthBoundTrainArrival = dadeland.NB_Time2_Arrival

document.querySelector("body > div:nth-child(3) > h5:nth-child(2)").innerText += ` ${dadelandFirstNorthBoundTrainTime}.....ETA: ${dadelandFirstNorthBoundTrainArrival}`
document.querySelector("body > div:nth-child(3) > h5:nth-child(3)").innerText += ` ${dadelandFSecondtNorthBoundTrainTime}.....ETA: ${dadelandSecondNorthBoundTrainArrival}`


//Brickell Info




})


console.log("Script ran")