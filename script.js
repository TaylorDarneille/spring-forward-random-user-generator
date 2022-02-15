const fetchUsers = (n) =>{
    // make fetch happen
    const endpoint = `https://randomuser.me/api/?results=${n}`
    // fetch requires the api url as an argument
    fetch(endpoint) // returns a fetch object that contains the data
    .then(fetchObj=>fetchObj.json()) // unwrap the obj to get the json data
    .then(jsonData=>{
        console.log(jsonData.results)
        addUsersToDom(jsonData.results)
    })
    .catch(err=>console.log('There was an error fetching data:', err))
}

const addUsersToDom = (apiResults) => {
    let peopleList = document.querySelector('#peopleList')
    // clear the unordered list if there are any results
    while(peopleList.firstChild){
        peopleList.firstChild.remove()
    }

    for(let i=0; i<apiResults.length; i++) {
        // create a new li
        let newUser = document.createElement('li')
        // create a new img
        let newImg = document.createElement('img')
        // add the name of the user to the li
        newUser.textContent = apiResults[i].name.first + " " + apiResults[i].name.last
        // add the source to the image
        newImg.src = apiResults[i].picture.large
        // append the users to the ul
        peopleList.appendChild(newUser)
        // append the image to the ul
        peopleList.appendChild(newImg)
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