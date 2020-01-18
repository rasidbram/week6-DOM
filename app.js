
  var cities = [
    "England$London",
    "Belgium$Brussel",
    "Canada$Ottawa",
    "Crotia$Zagreb",
    "Denmark$Copenhagen",
    "France$Paris",
    "Italy$Rome",
    "Norway$Oslo",
    "Turkey$Ankara"
  ];


  var featureCities = {
    England$London: {
      city: 'England',
      capital:'Capital: London',
      population:'Population: 55.619.400',
      officalLanguages: "Language: English-Cornish"
      // flag: <img src="images\1920px-Flag_of_England.svg.png"> </img>
    },

    Belgium$Brussel: {
      city: 'Belgium',
      capital:'Capital: Brussel',
      population:'Population: 11.420.163',
      officalLanguages: "Language: Dutch-French-German"
      // flag: <img src="images\1024px-Flag_of_Belgium.svg.png"> </img>
    },

    Canada$Ottawa: {
      city: 'Canada',
      capital:'Capital: Ottawa',
      population:'Population: 37.602.103',
      officalLanguages: "Language: English-French"
      // flag: <img src="images\1920px-Flag_of_Canada_(Pantone).svg.png"> </img>
    },

    Crotia$Zagreb: {
      city: 'Crotia',
      capital:'Capital: Zagreb',
      population:'Population: 4.130.304',
      officalLanguages: "Language: Crotian"
      // flag: <img src="images\1920px-Flag_of_Croatia.svg.png"> </img>
    },

    Denmark$Copenhagen: {
      city: 'Denmark',
      capital:'Capital: Copenhagen',
      population:'Population: 5.806.015',
      officalLanguages: "Language: Danish-Faroese-Greenlandic-German"
      // flag: <img src="images\1280px-Flag_of_Denmark.svg.png"> </img>
    },

    France$Paris: {
      city: 'France',
      capital:'Capital: Paris',
      population:'Population: 66.998.345',
      officalLanguages: "Language: French"
      // flag: <img src="images\1280px-Flag_of_France.svg.png"> </img>
    },


    Italy$Rome: {
      city: 'Italy',
      capital:'Capital: Rome',
      population:'Population: 60.483.973',
      officalLanguages: "Language: Italian"
      // flag: <img src="images\1280px-Flag_of_Italy.svg.png" />
    },

    Norway$Oslo: {
      city: 'Norway',
      capital:'Capital: Oslo',
      population:'Population: 5.328.212',
      officalLanguages: "Language: Norwegian-Sami"
      // flag: <img src="images\1280px-Flag_of_Norway.svg.png" />
    },

    Turkey$Ankara: {
      city: 'Turkey',
      capital:'Capital: Ankara',
      population:'Population: 82.003.882',
      officalLanguages: "Language: Turkish"
      // flag: <img src="images\1280px-Flag_of_Turkey.svg.png" />
    }
  };

  var flags = {
    England$London: "images/1920px-Flag_of_England.svg.png",

    Belgium$Brussel: "images/1024px-Flag_of_Belgium.svg.png",

    Canada$Ottawa: "images/1920px-Flag_of_Canada_(Pantone).svg.png",

    Crotia$Zagreb: "images/1920px-Flag_of_Croatia.svg.png",

    Denmark$Copenhagen: "images/1280px-Flag_of_Denmark.svg.png",

    France$Paris: "images/1280px-Flag_of_France.svg.png",

    Italy$Rome: "images/1280px-Flag_of_Italy.svg.png",

    Norway$Oslo: "images/1280px-Flag_of_Norway.svg.png",

    Turkey$Ankara:  "images/1280px-Flag_of_Turkey.svg.png"

  };
  
  // var mainHeader=document.createElement('h2');
  //  div1.appendChild(mainHeader);

  // var header=document.createElement('h2');
  // document.getElementById('countries').appendChild(header);
  // header.innerHTML='some countries';

 



  var div = document.getElementById("countries");

  var div1=document.querySelector('.row');

 

  for (var i = 0; i < cities.length; i++) {
    var id = cities[i];

    var ul = document.createElement("ul");
    div.appendChild(ul).setAttribute('class','a');
    div1.appendChild(ul);

    var h1 = document.createElement("h1");
    var countryName = featureCities[id].city;
    h1.innerHTML = countryName;
    ul.appendChild(h1);
    ul.appendChild(h1).setAttribute('class','setH1')

    var img = document.createElement("img");
    img.setAttribute("src", flags[id]);
    ul.appendChild(img);

    var li0 = document.createElement("li");
    var capitalName = featureCities[id].capital;
    li0.innerHTML = capitalName;
    ul.appendChild(li0);


    var li1 = document.createElement("li");
    var crowding = featureCities[id].population;
    li1.innerHTML = crowding;
    ul.appendChild(li1);

    var li2 = document.createElement("li");
    var Language = featureCities[id].officalLanguages;
    li2.innerHTML = Language;
    ul.appendChild(li2);

   
  };



