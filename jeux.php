<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pure CSS Drawing</title>
    <link rel="stylesheet" href="./assets/css/jeux.css" />
    <link rel="stylesheet" href="./assets/css/cursor.css" />

    <script src="./assets/js/home.js" defer></script>
    <script src="./assets/js/script.js" defer></script>
    <script src="./assets/js/modal.js" defer></script>
    <script src="./assets/js/cursor.js" defer></script>
    


  </head>

  <body>
    
<!-- sorcière -->
    <!-- <div class="css_lab"> -->
      <div class="witch">
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
        <div></div><div></div>
      </div>
    <!-- </div> -->
<!-- fin de sorcière -->


    <div id="heart-container">
      <span class="heart"></span>
      <span class="heart"></span>
      <span class="heart"></span>


    </div>

    <div class="container" id="container">
      <div class="chick">
        <div class="body">
          <div class="wing wing-bouge "></div>
          <div class="beak"></div>
          <div class="eye"></div>
          <div class="blush"></div>
          <div class="feather"></div>
        </div>
        <div class="left-leg"></div>
        <div class="right-leg"></div>
      </div>



      <!-- poêle -->
      <img id="skillet" class="dropzone" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/259510/skillet.svg"/>
  

        <div id="app" class="fire">
          <!-- <div class="feux">css only fire</div> -->
          <!-- <div class="texte">(do not open on your phone!)</div> -->
        </div>


        <div class="question-container" id="questionContainer">
          <div class="div-questions">
            <p id="question">Quelle est la réponse à la vie, à l'univers et à tout ?</p>
            <div class="resultat">
              <input type="text" id="answerInput">
              <button class="ok" id="answerButton">Répondre</button>
            </div>
          </div>
        </div>
     
    </div>

    <div class="fake_cursor">
    <img src="./assets/images/doigt.png" alt="">
</div>
<!-- GAME OVER -->
    <div class="App hidden">
      <h1 class="lost">GAME OVER</h1>
      <div class="containerr">
        <h2 class="note">You lose</h2>
        <section>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
          <div class='blooddrop'></div>
        </section>
 
    <a href="./jeux.php"> <!-- Ajoutez le lien ici -->
        <button class="ok" id="answerButton">Try again</button>
    </a>
</div>

      </div>
      
    </div>


    
  </body>
</html>
