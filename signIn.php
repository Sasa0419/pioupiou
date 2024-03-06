<?php
session_start();

// Inclure le fichier de connexion à la base de données
include('connect_database.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./assets/js/animationSignIn.js" defer></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/css/signIn.css">
    <title>Connexion & Inscriptions</title>
</head>

<body>
    <!-- sang -->
    <div class="images-container">
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.giff" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
        <div class="image">
            <img src="./assets/images/5362.gif" alt="">
        </div>
    </div>

    <!-- formulaire -->


    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="registration.php" method="POST">
                <input type="hidden" name="signup">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input name="firstname" type="text" placeholder="Pseudo" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign Up</button>
            </form>
        </div>



        <div class="form-container sign-in-container">
            <form action="authenticate.php" method="POST">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input name="email" type="email" placeholder="Email" />

                <input name="password" type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Sign In</button>

            </form>
        </div>

        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>

</body>

</html>