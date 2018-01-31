window.addEventListener('load', function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBOpoyDu75iNgKDBu80sGjgF1jTZ67Xrs",
    authDomain: "fir-firebase-birds.firebaseapp.com",
    databaseURL: "https://fir-firebase-birds.firebaseio.com",
    projectId: "fir-firebase-birds",
    storageBucket: "fir-firebase-birds.appspot.com",
    messagingSenderId: "478731307247"
  };
  firebase.initializeApp(config);

  const db = firebase.database();

  //hämta värde från användaren
  let myButton = document.getElementById('myButton');
  let birdName = document.getElementById('name');
  let birdColor = document.getElementById('color');
  let birdWings = document.getElementById('wings');

 myButton.addEventListener('click',function(){
   let newBird = {
     namn: birdName.value,
     färg: birdColor.value,
     vingspann: birdWings.value,
}
    db.ref().push(newBird);

  });
  //search funktion ---NOT working jet---
  let search = document.getElementById('searchInput');
  let searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', function(){
    let nameChange = document.getElementById('nameChange');
    console.log(search.value);
  });


  console.log('we start here');
  db.ref().on('value', snap => {
    console.log('on value hämtar hela databasen ');
    let data = snap.val();
    console.log(data);

    let divBird = document.getElementById('birds');
    for(let bird in data){
      let x = data[bird];
      console.log(x)
      const newDiv = document.createElement('ul');
      newDiv.innerHTML = `<li>Namn: <strong><i>${x.namn}</i></strong></li> <li> Färg: ${x.färg}</li> <li>Vingspann: ${x.vingspann}</li><br>`;
      divBird.appendChild(newDiv);
    }
  });

})
