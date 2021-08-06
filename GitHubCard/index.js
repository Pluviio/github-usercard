import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

//const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

//Axios
axios.get(`https://api.github.com/users/Pluviio`)
  .then(res => {
    const profileCard = userInfo(res.data)
    console.log(res);
    document.querySelector('.cards').appendChild(profileCard)
  })

  .catch(err => {
    console.error(err)
  })


const myFollowers = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// myFollowers.forEach( user => {
//    const profileCard = myFollowers + profileCard;
// })


//Function 
const infoCards = document.querySelector('.cards')
function userInfo(obj) {

  const profileCard = document.createElement('div');


  //Image Section
  const imgURL = document.createElement('img');
  imgURL.src = obj['avatar_url']
  profileCard.appendChild(imgURL)


  const cardInfo = document.createElement('div');
  profileCard.appendChild(cardInfo);


  //Name Section
  const name = document.createElement('h3');
  cardInfo.appendChild(name)
  name.textContent = obj['name']


  const username = document.createElement('p');
  cardInfo.appendChild(username)
  username.textContent = obj['login']



  const location = document.createElement('p');
  cardInfo.appendChild(location)
  location.textContent = `Location: ${obj['location']}`


  const profile = document.createElement('p');
  cardInfo.appendChild(profile)
  profile.textContent = 'Profile: '


  const address = document.createElement('a');
  profile.appendChild(address)
  address.textContent = obj['html_url']


  const followers = document.createElement('p');
  cardInfo.appendChild(followers)
  followers.textContent = 'Followers: ' + obj['followers']


  const following = document.createElement('p');
  cardInfo.appendChild(following)
  following.textContent = 'Following: ' + obj['following']


  const bio = document.createElement('p');
  cardInfo.appendChild(bio)
  bio.textContent = 'Bio: ' + obj['bio']

  profileCard.classList.add('card')
  infoCards.classList.add('infoCards')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  
  address.href = obj["html_url"];
  address.textContent = "Github"
  address.target = "_blank"


  return profileCard


}

myFollowers.forEach( user => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    const profileCard = userInfo(res.data)
    console.log(res);
    document.querySelector('.cards').appendChild(profileCard)
  })

  .catch(err => {
    console.error(err)
  })
})

