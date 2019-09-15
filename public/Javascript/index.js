
var userChoice = document.querySelector("#selector").value

const proxy = 'https://cors-anywhere.herokuapp.com/'
const api = `https://miami-transit-api.herokuapp.com/api/TrainTracker.json`

let data

// let dadelandFirstNorthBoundTrainTime
// let dadelandFirstNorthBoundTrainArrival
// let dadelandSecondNorthBoundTrainTime
// let dadelandSecondNorthBoundTrainArrival

// let dadelandFirstSouthBoundTrainTime
// let dadelandFirstSouthBoundTrainArrival
// let dadelandSecondSouthBoundTrainTime
// let dadelandSecondSouthBoundTrainArrival


//Dadeland Variables

fetch(api).then(response =>{
    return response.json();
}).then(trainData => {
console.log(trainData)
data = trainData
//Dadeland Info
const dadeland = data.RecordSet.Record[6]
//North Trains
const dadelandFirstNorthBoundTrainTime = dadeland.NB_Time1
const dadelandFirstNorthBoundTrainArrival = dadeland.NB_Time1_Arrival
const dadelandSecondNorthBoundTrainTime = dadeland.NB_Time2
const dadelandSecondNorthBoundTrainArrival = dadeland.NB_Time2_Arrival

document.querySelector("body > div:nth-child(3) > h5:nth-child(2)").innerText += ` ${dadelandFirstNorthBoundTrainTime}.....ETA: ${dadelandFirstNorthBoundTrainArrival}`
document.querySelector("body > div:nth-child(3) > h5:nth-child(3)").innerText += ` ${dadelandSecondNorthBoundTrainTime}.....ETA: ${dadelandSecondNorthBoundTrainArrival}`

//South Trains
const dadelandFirstSouthBoundTrainTime = dadeland.SB_Time1
const dadelandFirstSouthBoundTrainArrival = dadeland.SB_Time1_Arrival
const dadelandSecondSouthBoundTrainTime = dadeland.SB_Time2
const dadelandSecondSouthBoundTrainArrival = dadeland.SB_Time2_Arrival

document.querySelector("body > div:nth-child(4) > h5:nth-child(2)").innerText += ` ${dadelandFirstSouthBoundTrainTime}.....ETA: ${dadelandFirstSouthBoundTrainArrival}`
document.querySelector("body > div:nth-child(4) > h5:nth-child(3)").innerText += ` ${dadelandSecondSouthBoundTrainTime}.....ETA: ${dadelandSecondSouthBoundTrainArrival}`


//Brickell Info
const brickell = data.RecordSet.Record[1]
//North Trains
const brickellFirstNorthBoundTrainTime = brickell.NB_Time1
const brickellFirstNorthBoundTrainArrival = brickell.NB_Time1_Arrival
const brickellSecondNorthBoundTrainTime = brickell.NB_Time2
const brickellSecondNorthBoundTrainArrival = brickell.NB_Time2_Arrival

document.querySelector("body > div:nth-child(6) > h5:nth-child(2)").innerText += ` ${brickellFirstNorthBoundTrainTime}.....ETA: ${brickellFirstNorthBoundTrainArrival}`
document.querySelector("body > div:nth-child(6) > h5:nth-child(3)").innerText += ` ${brickellSecondNorthBoundTrainTime}.....ETA: ${brickellSecondNorthBoundTrainArrival}`

//South Trains
const brickellFirstSouthBoundTrainTime = brickell.SB_Time1
const brickellFirstSouthBoundTrainArrival = brickell.SB_Time1_Arrival
const brickellSecondSouthBoundTrainTime = brickell.SB_Time2
const brickellSecondSouthBoundTrainArrival = brickell.SB_Time2_Arrival

document.querySelector("body > div:nth-child(7) > h5:nth-child(2)").innerText += ` ${brickellFirstSouthBoundTrainTime}.....ETA: ${brickellFirstSouthBoundTrainArrival}`
document.querySelector("body > div:nth-child(7) > h5:nth-child(3)").innerText += ` ${brickellSecondSouthBoundTrainTime}.....ETA: ${brickellSecondSouthBoundTrainArrival}`


//User Selected Section

const stations = data.RecordSet.Record
let userStation
let stationTitle = document.querySelector("body > h3:nth-child(9)").innerText
let firstNBTrain = document.querySelector("body > div:nth-child(10) > h5:nth-child(2)").innerText
let secondNBTrain = document.querySelector("body > div:nth-child(10) > h5:nth-child(3)").innerText
let firstSBTrain = document.querySelector("body > div:nth-child(11) > h5:nth-child(2)").innerText
let secondSBTrain = document.querySelector("body > div:nth-child(11) > h5:nth-child(3)").innerText



console.log('TEST')
console.log(userChoice)
})

//const userPick = document.querySelector("body > select").value
// function refresh(){
//     if(userPick == 'Dadeland North'){
//         userStation = stations[6]
//         stationTitle += 'TEST'
//     }
//     if(userPick == 'Brickell'){
//         userStation = stations[1]
//         stationTitle += userPick
//     }
//     if(userPick == 'University'){
//         userStation = stations[21]
//         stationTitle += userPick
//     }

//     console.log('Refresh func ran')
// }

// refresh()


console.log("Script ran")