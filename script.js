document.addEventListener('DOMContentLoaded', ()=>{
    
    // make fetch happen
    const endpoint = 'http://www.reddit.comq=kittens'
    // fetch requires the api url as an argument
    fetch(endpoint) // returns a fetch object that contains the data
    .then(fetchObj=>fetchObj.json()) // unwrap the obj to get the json data
    .then(jsonData=>{
        console.log("here is the data: \n", jsonData)
    })
    .catch(err=>console.log('DONUTDONUTDONUT', err))

    console.log('WHEN WILL WE SEE THIS?')
})