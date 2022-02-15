const fetchUsers = (n) =>{
    // make fetch happen
    const endpoint = `https://randomuser.me/api/?results=${n}`
    // fetch requires the api url as an argument
    fetch(endpoint) // returns a fetch object that contains the data
    .then(fetchObj=>fetchObj.json()) // unwrap the obj to get the json data
    .then(jsonData=>{
        addUsersToDom(jsonData.results)
    })
    .catch(err=>console.log('There was an error fetching data:', err))
}

const addUsersToDom = (apiResults) => {
    for(let i=0; i<apiResults.length; i++) {
        // create a new li
        let newUser = document.createElement('li')
        // add the name of the user to the li
        newUser.textContent = apiResults[i].name.first + " " + apiResults[i].name.last
        // append the users to the ul
        document.querySelector('#peopleList').appendChild(newUser)
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    let numUsersToGet // declare variable

    // add a submission event listener to form
    document.querySelector('form').addEventListener('submit', e=>{
        // prevent page refresh
        e.preventDefault()
        // assign value from input box to numUsersToGet
        numUsersToGet = document.getElementById('numUsers').value
        // fetch the users!
        fetchUsers(numUsersToGet)
    })

})