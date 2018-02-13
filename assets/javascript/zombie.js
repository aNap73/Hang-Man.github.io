var bMusicOn = true;
var sGameState = "Splash";
var SplashDiv = document.getElementById("SplashDiv");
var RunDiv = document.getElementById("RunDiv");
var OverDiv = document.getElementById("OverDiv");
var Music = document.getElementById("MusicToggle");
var MusicLbl = document.getElementById("MusicLabel");
var Guessed = document.getElementById("divGuessed");
var CurPhrase = document.getElementById("CurPhrase");
var GamesWonDiv = document.getElementById("divWon");
var GuessPhrases = ["The Walking Dead", "Zombie", "Apocolypse", "Undead", "Baseball Bat","Survivor", "Cross Bow", "Just Stay Alive Somehow", "Grit", "Blood", "Gore", "House of the Dead", "John Romeo", "Skull", "Decompose"];
var GuessedLetters = [];
var sCurPhrase = "";
var GuessesLeft = document.getElementById("divGuessesLeft");
var iGuessesLeft =  12;
var iPart = 0;
var iGamesWon=0;
function reset()
{
  iPart = 0;
  /*bMusicOn = true;*/
  iGamesWon=0;
  sGameState = "Over";
  SplashDiv = document.getElementById("SplashDiv");
  RunDiv = document.getElementById("RunDiv");
  OverDiv = document.getElementById("OverDiv");
  Music = document.getElementById("MusicToggle");
  MusicLbl = document.getElementById("MusicLabel");
  Guessed = document.getElementById("divGuessed");
  CurPhrase = document.getElementById("CurPhrase");;
  GuessesLeft = document.getElementById("divGuessesLeft");
  GuessPhrases = ["The Walking Dead", "Zombie", "Apocolypse", "Undead", "Baseball Bat","Survivor", "Cross Bow", "Just Stay Alive Somehow", "Grit", "Blood", "Gore", "House of the Dead", "John Romeo", "Skull", "Decompose"];
  ZombieParts = ["head.gif","body.gif","ArmLeft.gif","ArmRight.gif","LegLeft.gif","LegRight.gif"];
  GuessedLetters = [];
  sCurPhrase = "";  
  iGuessesLeft =  12;
  Guessed.innerText = "Guessed: "

  var myitem;
  myitem=document.getElementById("head");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("torso");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("armL"); 
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("armR");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("legL");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("legR");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  sCurPhrase = GuessPhrases[Math.floor(Math.random() * GuessPhrases.length)]; 
  kpDown (); 
}
function resetWin()
{
  GuessedLetters = [];
  sCurPhrase = "";  
  iGuessesLeft =  12;
  Guessed.innerText = "Guessed: "
  var myitem;
  myitem=document.getElementById("head");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("torso");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("armL"); 
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("armR");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("legL");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  myitem=document.getElementById("legR");
  myitem.style='background-image: url("./assets/images/partblank.gif")';
  sCurPhrase = GuessPhrases[Math.floor(Math.random() * GuessPhrases.length)];
   
}
function kpDown (event) 
{
  
  if (sGameState=="Splash"){
    reset();
    sGameState="Run";
    SplashDiv.style = "display: none";
    RunDiv.style = "display: block";    
    Music.src = "./assets/sounds/creepy.mp3";
    sCurPhrase = GuessPhrases[Math.floor(Math.random() * GuessPhrases.length)]; 
    DisplayCurPhrase()
  }
  else if (sGameState==="Run"){
    
    RunPress(event);
    DisplayCurPhrase();
  }
  else if (sGameState==="Over"){
    
    sGameState="Splash";
    OverDiv.style = "display: none";
    SplashDiv.style = "display: block";    
    Music.src = "./assets/sounds/MusicBack2.mp3";
    
  }
  if(!bMusicOn){Music.pause();}
}
function DisplayCurPhrase()
{
  //if(sGameState=="Over"){return;}
  var bFound = false;
  var sWorkPhrase = sCurPhrase.toString(); 
  for(var i=0; i < sCurPhrase.length; i++){
    bFound = false;
    for(var j=0; j < GuessedLetters.length; j++)
     {   
       
        if((GuessedLetters[j].toLowerCase()==sCurPhrase[i].toLowerCase()) || (sCurPhrase[i]==" ")){
        bFound =true;
        j=GuessedLetters.length;
      }  
     }
     if(!bFound)
     {
      sWorkPhrase= sWorkPhrase.replace(sCurPhrase[i],"-");
     }       
    }
    CurPhrase.innerText = sWorkPhrase;
    GuessesLeft.innerText = "Guesses Left: " + iGuessesLeft;
    if(sWorkPhrase.indexOf("-")<0)
    {
      iGamesWon++;
      resetWin();
      DisplayCurPhrase();
    }
    GamesWonDiv.innerText = "Games Won: " + iGamesWon;
}  
  
  

function RunPress(event)
{
  
  var bFound =false;
  var sOut ="";
  GuessedLetters.forEach(function (item){ 
  
  
    if (item==event.key){

      bFound=true;
      }
  });
  if(!bFound){
    GuessedLetters.push(event.key);   
  }

  if(sCurPhrase.indexOf(event.key)<0){
    iGuessesLeft -= 1;
    var myitem;
    if (iGuessesLeft <=10)
    {
      myitem=document.getElementById("head");
      myitem.style='background-image: url("./assets/images/head.gif")';
    }
    if (iGuessesLeft <=8)
    {
      myitem=document.getElementById("torso");
      myitem.style='background-image: url("./assets/images/body.gif")';
    } 
    if (iGuessesLeft <=6)
    {
      myitem=document.getElementById("armL"); 
      myitem.style='background-image: url("./assets/images/ArmLeft.gif")';
     } 
    if (iGuessesLeft <=4)
    {
      myitem=document.getElementById("armR");
      myitem.style='background-image: url("./assets/images/ArmRight.gif")';
      
    } 
    if (iGuessesLeft <=3)
    {
      myitem=document.getElementById("legL");
      myitem.style='background-image: url("./assets/images/LegLeft.gif")';
    
    }
    if (iGuessesLeft <=2)
    {
      myitem=document.getElementById("legR");
      myitem.style='background-image: url("./assets/images/LegRight.gif")';
      
    } 
    if(iGuessesLeft <=0)
    {
      GameOver();
    }

  }

  GuessedLetters.forEach(function (item){
    sOut += item + " "});
  Guessed.innerText= "Guessed: " + sOut;
}
function GameOver()
{
  
  
  sGameState="Over";
  RunDiv.style = "display: none";
  OverDiv.style = "display: block";    
  Music.src = "./assets/sounds/FallenAngels.mp3";
  
}
function mnMusicToggle(){
  if (bMusicOn === true){
    MusicLbl.innerText="Music: Off";
    Music.pause();
    bMusicOn = false;
  }
  else {
    //MusicLbl.innerText= "Music: Playing";
    MusicLbl.innerText="Music: On"
    Music.play();
    bMusicOn = true;
  }

}

