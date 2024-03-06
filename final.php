<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pure CSS Drawing</title>
    <link rel="stylesheet" href="./assets/css/final.css" />
    <script src="./assets/js/final.js" defer></script>
  </head>
  <body>
    <h1>Libérée, Délivrée</h1>
    <div class="container">
      <div class="chick">
        <div class="body">
          <div class="wing wing-bouge"></div>
          <div class="beak"></div>
          <div class="eye"></div>
          <div class="blush"></div>
          <div class="feather"></div>
        </div>
        <div class="left-leg"></div>
        <div class="right-leg"></div>
      </div>
      <div class="shadow"></div>
      <div class="cloud cloud1"></div>
      <div class="cloud cloud2"></div>
      <div class="cloud cloud3"></div>
      <div class="cloud cloud4"></div>
      <div class="cloud cloud5"></div>
      <div class="cloud cloud6"></div>
      <div class="cloud cloud7"></div>
      <div class="cloud cloud8"></div>
      <div class="cloud cloud9"></div>
      <div class="cloud cloud10"></div>
      
      <h1 class="piou">Piou piou web12 💖 </h1> 



    </div>
    <audio id="myAudio" src="assets/images/liberer.mp3"></audio>
  
  <script>
    const audio = document.getElementById('myAudio');
  
    document.addEventListener('DOMContentLoaded', function () {
      audio.play().catch(error => {
        // Gérer les erreurs liées à la lecture automatique ici, si nécessaire
      });
    });
  </script>

  </body>
</html>