'use strict';

//Global Variable to how response outputs
let activityStorage= [
{activity:"Sailing",
apparentTemperatureLow:0,
probabilityOfPrecipitation:100,
windSpeed:15,
waveHeight:7,
visibility:1852,
describe:"Sailing is ...",
image:"img/sailing.jpg",
imageico:"img/sailingico.jpg",
activityTense: 'Sail.'
}
,
{
activity:"Hiking",
apparentTemperatureLow:0,
probabilityOfPrecipitation:100,
windSpeed:100,
waveHeight:100,
visibility:0,
describe:"Hiking is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/hiking.jpg",
imageico: "img/hikingico.jpg",
activityTense: 'hike.'
}
,
{
activity:"Fishing",
apparentTemperatureLow:0,
probabilityOfPrecipitation:60,
windSpeed:10,
waveHeight:2,
visibility:0,
describe:"Fishing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/fishing.jpg",
imageico: "img/fishingico.jpg",
activityTense: 'fish.'
}
,
{
activity:"Drone_Flying",
apparentTemperatureLow:100,
probabilityOfPrecipitation:10,
windSpeed:10,
waveHeight:100,
visibility:0,
describe:"Drone flying is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/drone.jpg",
imageico:"img/droneico.jpg",
activityTense: 'fly a drone.'
}
,

{
activity:"Kite_Flying",
apparentTemperatureLow:32,
probabilityOfPrecipitation:40,
windSpeed:100,
waveHeight:0,
visibility:1609,
describe:"Kite flying is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/kite.jpg",
imageico:"img/kiteico.jpg",
activityTense: 'fly a kite.'
}
,

{
activity:"Star_Gazing",
apparentTemperatureLow:32,
probabilityOfPrecipitation:75,
windSpeed:100,
waveHeight:100,
visibility:241140,
describe:"Star gazing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/stars.jpg",
imageico: "img/starsico.jpg",
activityTense: 'gaze at the stars.'
}
,

{
activity:"Baseball",
apparentTemperatureLow:45,
probabilityOfPrecipitation:30,
windSpeed:100,
waveHeight:100,
visibility:0,
describe:"baseball is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/baseball.jpg",
imageico:"img/baseballico.jpg",
activityTense: 'play baseball.'
}
,

{
activity:"Rock_Climbing",
apparentTemperatureLow:40,
probabilityOfPrecipitation:75,
windSpeed:100,
waveHeight:100,
visibility:0,
describe:"Rock Climbing is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/rock.jpg",
imageico:"img/rockico.jpg",
activityTense: 'rock climb.'
}
,

{
activity:"Cycling",
apparentTemperatureLow:50,
probabilityOfPrecipitation:80,
windSpeed:5,
waveHeight:100,
visibility:0,
describe:"Cycling is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/cycling.jpg",
imageico:"img/cyclingico.jpg",
activityTense: 'bike.'
}
,

{
activity:"Motorcycling",
apparentTemperatureLow:60,
probabilityOfPrecipitation:60,
windSpeed:10,
waveHeight:100,
visibility:0,
describe:"Motorcyling is ...",
photo:"placeholder",
links:"placeholderForLinks",
image:"img/moto.jpg",
imageico:"img/motoico.jpg",
activityTense: 'go for a ride.'
}
,
{
  activity:"Skateboarding",
  apparentTemperatureLow:40,
  probabilityOfPrecipitation:30,
  windSpeed:5,
  waveHeight:100,
  visibility:0,
  describe:"Skateboarding is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/skatepage.jpg",
  imageico:"img/skateico.png",
  activityTense: 'go skate.'
  }
  ,
{
  activity:"Running",
  apparentTemperatureLow:20,
  probabilityOfPrecipitation:80,
  windSpeed:10,
  waveHeight:100,
  visibility:0,
  describe:"Running is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/runpage.jpg",
  imageico:"img/runico.png",
  activityTense: 'go for a run.'
  }
  ,
{
  activity:"Basketball",
  apparentTemperatureLow:40,
  probabilityOfPrecipitation:60,
  windSpeed:30,
  waveHeight:100,
  visibility:0,
  describe:"Basketball is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/hooppage.jpg",
  imageico:"img/hoopico.png",
  activityTense: 'go play basketball.'
  }
  ,
{
  activity:"Golf",
  apparentTemperatureLow:50,
  probabilityOfPrecipitation:20,
  windSpeed:30,
  waveHeight:100,
  visibility:0,
  describe:"Golf is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/golfpage.png",
  imageico:"img/golfico.png",
  activityTense: 'go golfing.'
  }
  ,
{
  activity:"Football",
  apparentTemperatureLow:10,
  probabilityOfPrecipitation:80,
  windSpeed:10,
  waveHeight:100,
  visibility:20,
  describe:"Football is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/footpage.png",
  imageico:"img/footico.png",
  activityTense: 'go play football.'
  }
  ,
{
  activity:"Tennis",
  apparentTemperatureLow:55,
  probabilityOfPrecipitation:20,
  windSpeed:30,
  waveHeight:100,
  visibility:0,
  describe:"Tennis is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/tennpage.jpg",
  imageico:"img/tennico.png",
  activityTense: 'go play tennis.'
  }
  ,
{
  activity:"Soccer",
  apparentTemperatureLow:55,
  probabilityOfPrecipitation:20,
  windSpeed:10,
  waveHeight:100,
  visibility:0,
  describe:"Soccer is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/soccpage.png",
  imageico:"img/soccico.png",
  activityTense: 'go play soccer.'
  }
  ,
{
  activity:"Surfing",
  apparentTemperatureLow:40,
  probabilityOfPrecipitation:90,
  windSpeed:10,
  waveHeight:10,
  visibility:0,
  describe:"Surfing is ...",
  photo:"placeholder",
  links:"placeholderForLinks",
  image:"img/surfpage.png",
  imageico:"img/surfico.png",
  activityTense: 'go surfing.'
  }
];

let doableActivities=[];

//Test against weather properties
function canIDoIt(tempNum,precipNum,windNum,waveNum,sightNum){
  let newArray = [];
  let qualifiedArray = [];

  for(let i = 0 ; i < activityStorage.length; i++)
  {
    if(tempNum >= activityStorage[i].apparentTemperatureLow && precipNum <= activityStorage[i].probabilityOfPrecipitation && windNum <= activityStorage[i].windSpeed && waveNum <= activityStorage[i].waveHeight && sightNum > activityStorage[i].visibility)
    {
      newArray.push(activityStorage[i]);
      
      
    }
  }
  
  
  suggestedActivities(newArray);
}
//console.log(weatherForecast);

//Updates Dom with confirmation of being able to do something
function displayResults(responseJson) {
       //$('.js-results').html('');
       $(responseJson).ready(function () {
       $('.loading').addClass('hidden');
       
      
    })
    let apTemp = Math.round((responseJson.properties.maxTemperature.values[0].value * 1.8) + 32) ;
    let precip = responseJson.properties.probabilityOfPrecipitation.values[0].value;
    let wind = Math.round(responseJson.properties.windSpeed.values[0].value);
    let wave = Math.round(responseJson.properties.waveHeight.values[0].value);
    let sight = Math.round(responseJson.properties.visibility.values[0].value);
    
    let activitiesList = canIDoIt(apTemp,precip,wind,wave,sight);
    doableActivities = canIDoIt(apTemp,precip,wind,wave,sight);
    
    
    //send information to forecast page
    forecast(apTemp,precip,wind,wave,sight);
    console.log(activitiesList)
    

    
    
    
    //$('.js-results').removeClass('hidden')

}

function forecast(apTemp,precip,wind,wave,sight){
 let forecastHtml = `<h1>Forecast</h1>
 <p class='details'>Temperature: ${apTemp} F°
 <br>Precipitation Chance: ${precip}%
 <br>Wind Speed: ${wind} Mph
 <br>Wave Height: ${wave}m
 <br>Visibiility: ${sight}m</p>
 <input type="button" class="activites" value="Suggested Activites">
 <br>
 <input class="home" type="button" value="Start Over">`
 
 $('.forecast').on('click', e => {
     console.log('forecast click')
     $('.container').html(forecastHtml)
 })
}

function suggestedActivities(doableStuff){
  let qualifiedActivities = 
  `
  <h1>The Weather seems right for...</h1>
  <section class= "activitiesList">

  <ul style="list-style: none;" class="js-suggested details">
  </section>
  `

 $('.container').on('click', '.activites', e => {
     console.log(doableStuff)
     $('.container').html(qualifiedActivities)
     
      
     for(let i = 0; i < doableStuff.length; i++){
      $(".js-suggested").append(
      `<div class="${doableStuff[i].activity} activity">
      
      <img src=${doableStuff[i].imageico} class="activity-photo">
      
      <p>${doableStuff[i].activity}</p>
      </div>
      
      `
     )
      
    }   
    $(".container").append(
      `
      <br>
      <input class="home" type="button" value="Start Over">
      `
      )
      activityPages(doableStuff)
 })
}

function activityPages(doableStuff){
  for(let i = 0; i < doableStuff.length; i++){
   $(`.${doableStuff[i].activity}.activity`).on('click', e=>{

    let pageHtml = 
    `
    
    <section class="box">
    <h1>${doableStuff[i].activity}</h1>
  
    <img src=${doableStuff[i].image} class="activity-photo-big" >
      
    <br>
    <ul>
      <li class="wikipedia details"><span class='details'>Exerpt from Wiki:</span><br></li>
      <br>
      <li class="duck details"><a href='https://duckduckgo.com/?t=ffab&q=${doableStuff[i].activity}+near+me&ia=places'> ${doableStuff[i].activity} near me  </a></li>
    </ul>
    <section class="buttonBlock">
    <input class="back" type="button" value="Back">
    <input class="home" type="button" value="Start Over">
    <section class="buttonBlock">
    </section>
    
    `

    $('.container').html(pageHtml)
    wikiSearch(doableStuff[i].activity);

  })
   
  }
  backButton(doableStuff);
}

function backButton(doableStuff){
$('.container').on('click',".back", e=> {


  console.log("clicked");
      
    let qualifiedActivities = 
    `
    <h1>Look at what you can do</h1>
    <section class= "activitiesList">

    <ul style="list-style: none;" class="js-suggested">
    </section>
    `
$('.container').html(qualifiedActivities)
     for(let i = 0; i < doableStuff.length; i++){
      $(".js-suggested").append(
       `
       <div class="${doableStuff[i].activity} activity">
       <img src=${doableStuff[i].imageico} class="activity-photo">
       <p>${doableStuff[i].activity}</p>
       </div>
      `
      )}     
    activityPages(doableStuff);  
  })
  

}

function homeButton(){
  $('.container').on('click',".home", e=> {
  $(".container").html(
    `
    <h1>Weather for Activities</h1>

    <form id="js-form" class="search-form css-search">
     
    <input class="click" type="button" value="Current Location">
    <br>
    <input class="forecast" type="button" value=" Check out your forecast">
    <section class ="location">
    </form>
    <main>
        <section class="flex-container">
           <section class="js-results results hidden">
           
            </section>
        </section>
    </main>
    `
  )
  
  getPos();
  activitylisted();
  forecast();
        
      
    })
  }


function activitylisted(){
 $('ul').on('click','li', e => {
     console.log('sailing click')
     
 })
}

//MediaWiki API 

function wikiSearch(searchterm){
var url = "https://en.wikipedia.org/w/api.php"; 

var params = {
    action: "query",
    list: "search",
    srsearch: searchterm,
    format: "json"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
           $('.wikipedia').append(
            `
            ${response.query.search[0].snippet}.....
            <a href='https://en.wikipedia.org/wiki/${searchterm}'>continue here</a>

            `)
      })
    .catch(function(error){console.log(error);});
 
}


//Uses the user input of thier coordinates to find the weather grid area to report on.
function getWeather(coords) {
    const url = `https://api.weather.gov/points/${coords}/`
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => getGridData(responseJson.properties.forecastGridData))
        .catch(err => {
            displayError(err.message);
        });
         
} 

//Gets actual weather properties to examine
function getGridData(newURL) {
    const url = newURL;
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText);
        })
        
        //let latt = user.latitude; let long = user.longitude; let lat = parseFloat(latt.toFixed(6)); let lon = parseFloat(long.toFixed(6));
        .then(responseJson => 
         
         displayResults(responseJson)
        )
        .catch(err => {
            displayError(err.message);
        });
        
}


//HTML for error scenario
function displayError(error) {
    console.log('displayError ran');
    $('.js-results').html(`<h3 class="error">Something went wrong: ${error}</h3>`)
    $('.loading').addClass('hidden');
    $('.js-results').removeClass('hidden')
}



//relays position object
function success(geoLocationPos){
  let user = geoLocationPos.coords;

  console.log('Coordinates Sent');
  relayPosition(user)
};

//calls navigator and runs sucess function
function getPos(){
 $('.click').on('click', e =>{
  console.log('click')
  window.navigator.geolocation.getCurrentPosition(success)
  })
};
//sets coordinates to varibale
function relayPosition(user){

    let latt = user.latitude
    let long = user.longitude
    console.log(latt,long)

    //the rest of the code in this function and display position isnt needed
    let coords = latt + "," + long;

    getWeather(coords)
};

function displayPosition(string){
  $('.location').empty();
  $('.location').append(string);

}

getPos();
activitylisted();
homeButton();


