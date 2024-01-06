document.addEventListener('DOMContentLoaded', () => {
  const appsList = [
    {
     name: "! Game Request",
     link: "https://forms.gle/LT6su3hTCe3Cu3qS6",
     image: "/assets/icons/Game Request.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Breaking The Bank",
     link: "https://f.silvergames.com/ruffle/player.php?id=1303",
     image: "/assets/icons/HenryStickminBTB.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Idle Breakout",
     link: "https://www.coolmathgames.com/0-idle-breakout/play",
     image: "/assets/icons/IdleBreakout.png",
     categories: ['all'],
     error: false
    },
    {
     name: "FNAF 1",
     link: "https://run3.io/popgame/fnaf/fnaf1/",
     image: "/assets/icons/FNAF1.png",
     categories: ['all'],
     error: false
    },
    {
     name: "FNAF 2",
     link: "https://run3.io/popgame/fnaf/fnaf2.html",
     image: "/assets/icons/FNAF2.png",
     categories: ['all'],
     error: false
    },
    {
     name: "FNAF 3",
     link: "https://run3.io/popgame/fnaf/fnaf3.html",
     image: "/assets/icons/FNAF3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "FNAF 4",
     link: "https://run3.io/popgame/fnaf/fnaf4.html",
     image: "/assets/icons/FNAF4.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 1",
     link: "https://www.hoodamath.com/mobile/games/duck-life/game.html?nocheckorient=1",
     image: "/assets/icons/DuckLife1.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 2",
     link: "https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html?nocheckorient=1",
     image: "/assets/icons/DuckLife2.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 3",
     link: "https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html?nocheckorient=1",
     image: "/assets/icons/DuckLife3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 4",
     link: "https://www.hoodamath.com/mobile/games/duck-life-4/game.html?nocheckorient=1",
     image: "/assets/icons/DuckLife4.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 5",
     link: "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fduck-life-5.xml",
     image: "/assets/icons/DuckLife5.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Duck Life 6",
     link: "https://www.hoodamath.com/mobile/games/duck-life-6-space/game.html?nocheckorient=1",
     image: "/assets/icons/DuckLife6.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Super Mario Bros",
     link: "https://supermario.ee/mario.html",
     image: "/assets/icons/SuperMarioBros.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Super Mario Bros 2",
     link: "https://kiz10.com/upload/games/htmlgames/super-mario-bros-2/index.html",
     image: "/assets/icons/SuperMarioBros2.jpg",
     categories: ['all'],
     error: false
    },
    {
     name: "Super Mario Bros 3",
     link: "https://4gameground.com/nnes/?nsyst2=nes&nsyst=nes&fl=4_Super_Mario_Bro&rom=nes",
     image: "/assets/icons/SuperMarioBros3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Super Mario 64",
     link: "https://downloads.retrostic.com/play.php?console_slug=n64&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%2064%20%28U%29%20%5B%21%5D.zip",
     image: "/assets/icons/SuperMario64.png",
     categories: ['all'],
     error: false
    },
 ];
  
  function saveToLocal(path) {
    localStorage.setItem("savedPaths", path);
  }
  
  appsList.sort((a, b) => a.name.localeCompare(b.name));
  
  const nonPinnedApps = document.querySelector('.container-apps');
  const pinnedApps = document.querySelector('.pinned-apps');
  var pinList = localStorage.getItem("pinnedGames");
  try{
    pinList=pinList.split(",").map(Number)
    } catch {}
  var appInd = 0;
  appsList.forEach(app => {
    let pinNum = appInd
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.setAttribute('data-category', app.categories.join(' '));

    const pinIcon = document.createElement('i');
    pinIcon.classList.add("fa");
    pinIcon.classList.add("fa-map-pin");
    pinIcon.ariaHidden = true;

    const btn = document.createElement('button');
    btn.appendChild(pinIcon);
    btn.style.float = "right";
    btn.style.backgroundColor="rgb(45,45,45)";
    btn.style.borderRadius="50%";
    btn.style.borderColor="transparent";
    btn.style.color="white";
    btn.style.top="-200px";
    btn.style.position="relative";
    btn.onclick = function () {
      setPin(pinNum);
    };
    btn.title="Pin";

    const link = document.createElement('a');

    if (app.local) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        saveToLocal(app.link);
        window.location.href = '/edu.html';
        return false;
      };
    } else if (app.blank) {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        blank(app.link);
        return false;
      };
    } else {
      link.onclick = function() {
        if (typeof app.say !== 'undefined') {
          alert(app.say);
        }
        images(app.link);
        return false;
      };
    }

    const image = document.createElement('img');
    image.width = 145;
    image.height = 145;
    image.src = app.image;
    image.loading = "lazy";


    const paragraph = document.createElement('p');
    paragraph.textContent = app.name;
    if (app.error) {
      paragraph.style.color = 'red';
    }

    link.appendChild(image);
    link.appendChild(paragraph);
    columnDiv.appendChild(link);
    if(appInd != 0) {
      columnDiv.appendChild(btn);
    }

    if(pinList!=null && appInd != 0) {
      if(pinContains(appInd,pinList)) {
        pinnedApps.appendChild(columnDiv);
      }
      else {
        nonPinnedApps.appendChild(columnDiv);
      }
    }
    else {
      nonPinnedApps.appendChild(columnDiv);
    }
    appInd++;
  });
  appsContainer.appendChild(pinnedApps);
  appsContainer.appendChild(nonPinnedApps);
});
function setPin(index) {
  pins = localStorage.getItem("pinnedGames");
  if(pins == null) {
    pins = [];
  }
  if(pins == "") {
    pins = [];
  }
  else {
    pins = pins.split(",").map(Number);
  }
  if(pinContains(index,pins)) {
    let remove = pins.indexOf(index);

    pins.splice(remove, 1);

  }
  else {
    pins.push(index);
  }
  localStorage.setItem("pinnedGames", pins);
  location.reload();
}
function pinContains(i,p) {
  if(p=="") {return false;}
  for(var x = 0; x < p.length; x++) {if(p[x]===i) {
    return true;
  }}
  return false;
}

function showImages() {
  var selectedCategories = Array.from(document.querySelectorAll("#category option:checked")).map(option => option.value);
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var categories = game.getAttribute("data-category").split(" ");

    if (selectedCategories.length === 0 || selectedCategories.some(category => categories.includes(category))) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}

function search_game() {
  var input = document.getElementById("searchbarbottom");
  var filter = input.value.toLowerCase();
  var games = document.getElementsByClassName("column");

  for (var i = 0; i < games.length; i++) {
    var game = games[i];
    var name = game.getElementsByTagName("p")[0].textContent.toLowerCase();

    if (name.includes(filter)) {
      game.style.display = "block";
    } else {
      game.style.display = "none";
    }
  }
}
