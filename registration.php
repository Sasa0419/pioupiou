<?php
include('connect_database.php');
session_start();

// Gestion de l'inscription
if (isset($_POST['signup'])) {
    $firstname = $_POST['firstname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Vérifier si l'e-mail existe déjà dans la base de données
    $check_query = "SELECT COUNT(*) FROM joueur WHERE email = :email";
    $check_stmt = $database->prepare($check_query);
    $check_stmt->bindParam(':email', $email);
    $check_stmt->execute();
    $email_exists = $check_stmt->fetchColumn();

    if ($email_exists) {
        // L'e-mail existe déjà, rediriger avec un message d'erreur
        header("Location: signIn.php?error=email_exist");
        exit;
    } else {
        // L'e-mail n'existe pas, effectuer l'insertion
        $insert_query = "INSERT INTO joueur (firstname, email, password) VALUES (:firstname, :email, SHA2(:password, 256))";

        try {
            $stmt = $database->prepare($insert_query);
            $stmt->bindParam(':firstname', $firstname);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $password);
            $stmt->execute();
            $message =  "Inscription réussie !";

            // Rediriger avec un message de succès
            header("location: signIn.php?msg=$message");
            exit;
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }
}
?>
