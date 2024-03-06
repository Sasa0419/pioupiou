<?php
session_start();

include('connect_database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Vérifier si les champs ne sont pas vides
    if (empty($email) || empty($password)) {
        header("Location: signIn.php?error=empty_fields");
        exit;
    }

    // Authentification
    $query = "SELECT * FROM joueur WHERE email = :email AND password = SHA2(:password, 256)";
    $stmt = $database->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $password);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $_SESSION["user_email"] = $email;
        header("Location: home.php"); // Redirection après une authentification réussie
        exit;
    } else {
        // L'utilisateur n'existe pas, redirigez-le vers la page d'inscription
        header("Location: signIn.php?error=inscription");
        exit;
    }
}
?>
