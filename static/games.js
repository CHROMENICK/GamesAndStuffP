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
    {
     name: "Escaping The Prison",
     link: "https://f.silvergames.com/ruffle/player.php?id=1302",
     image: "/assets/icons/HenryStickminESP.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Stealing The Diamond",
     link: "https://f.silvergames.com/ruffle/player.php?id=1301",
     image: "/assets/icons/HenryStickminSTD.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Infiltrating The Airship",
     link: "https://f.silvergames.com/ruffle/player.php?id=3011",
     image: "/assets/icons/HenryStickminITA.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Fleeing The Complex",
     link: "https://f.silvergames.com/ruffle/player.php?id=5195",
     image: "/assets/icons/HenryStickminFTC.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Run 3",
     link: "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/",
     image: "/assets/icons/Run3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Run 3",
     link: "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/",
     image: "/assets/icons/Run3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "OvO",
     link: "https://75jfh73gd9hla64g-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/ovo/ovo.xml",
     image: "/assets/icons/OvO.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Wrestle Bros",
     link: "https://wrestlebros.io/",
     image: "/assets/icons/WrestleBros.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Basket Bros",
     link: "https://basketbros.io",
     image: "/assets/icons/BasketBros.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Monkey Mart",
     link: "https://slope-game.github.io/newgame/monkey-mart/",
     image: "/assets/icons/MonkeyMart.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Run 3",
     link: "https://unblocked1889.github.io/R033/tn6pS9dCf37xAhkJv/",
     image: "/assets/icons/Run3.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Subway Surfers",
     link: "https://kazwire.com/game/static/subway-surfers/index.html",
     image: "/assets/icons/SubwaySurfers.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Slope",
     link: "https://slope-game.github.io/rungame/slope/",
     image: "/assets/icons/Slope.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Bitlife",
     link: "https://bitlifeonline.github.io/class/index.html",
     image: "/assets/icons/Bitlife.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Friday Night Funkin'",
     link: "https://static.playunblocked.com/2021/04/friday-night-funkin/",
     image: "/assets/icons/FNF.png",
     categories: ['all'],
     error: false
    },
    {
     name: "JustFall.lol",
     link: "https://justfall.lol/",
     image: "/assets/icons/JustFallLOL.png",
     categories: ['all'],
     error: false
    },
    {
     name: "1v1.lol",
     link: "https://1v1.lol/",
     image: "/assets/icons/1v1LOL.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Backrooms",
     link: "https://kdata1.com/2022/05/backroom16/",
     image: "/assets/icons/Backrooms.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Cookie Clicker",
     link: "https://webglmath.github.io/cookie-clicker/",
     image: "/assets/icons/CookieClicker.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Tiny Fishing",
     link: "https://www.dob5.com/d/file/games/tiny-fishing/",
     image: "/assets/icons/TinyFishing.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Minecraft",
     link: "https://sd592g.github.io/zj684od4lfg/",
     image: "/assets/icons/Minecraft.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Baldi's Basics",
     link: "https://igroutka.ru/loader/game/26471/",
     image: "/assets/icons/BaldisBasics.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Dino Game",
     link: "https://offline-dino-game.firebaseapp.com/",
     image: "/assets/icons/DinoGame.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Flappy Bird",
     link: "https://flappy-bird.io/flappy-bird.embed",
     image: "/assets/icons/FlappyBird.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Crossy Road",
     link: "https://kazwire.com/game/static/crossy-road/index.html",
     image: "/assets/icons/CrossyRoad.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Drive Mad",
     link: "https://g.vseigru.net/10/igra-dzhipy-bezumnoe-vozhdenie/",
     image: "/assets/icons/DriveMad.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Powerline.io",
     link: "https://powerline.io/",
     image: "/assets/icons/Powerlineio.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Paper.io",
     link: "https://games.voodoo.io/paperio2/",
     image: "/assets/icons/Paperio.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Krunker.io",
     link: "https://krunker.io/",
     image: "/assets/icons/Krunkerio.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Hole.io",
     link: "https://hole-io.com/",
     image: "/assets/icons/Holeio.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Sonic The Hedgehog",
     link: "https://megadrive-emulator.com/game/?game=Sonic_the_Hedgehog.bin",
     image: "/assets/icons/SonicTheHedgehog.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Sonic The Hedgehog 2",
     link: "https://megadrive-emulator.com/game/?game=Sonic_the_Hedgehog_2_JUE.bin",
     image: "/assets/icons/SonicTheHedgehog2.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Tunnel Rush",
     link: "https://webglmath.github.io/tunnel-rush/",
     image: "/assets/icons/TunnelRush.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Clicker Heroes",
     link: "https://www.gameslol.net/data/clicker-heroes/index.html",
     image: "/assets/icons/ClickerHeroes.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Retro Bowl",
     link: "https://retrobowlmod.com/retro-bowl.embed",
     image: "/assets/icons/RetroBowl.png",
     categories: ['all'],
     error: false
    },
    {
     name: "Osw!",
     link: "https://joshua-usi.github.io/osw",
     image: "/assets/icons/osw.png",
     categories: ['all'],
     error: false
    },
    {
     name: "A Dance Of Fire And Ice",
     link: "https://kazwire.com/game/static/a-dance-of-fire-and-ice/index.html",
     image: "/assets/icons/ADOFAI.png",
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
