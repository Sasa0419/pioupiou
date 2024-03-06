const MODAL = document.querySelector(".App");
const BOUTON = document.querySelector(".ok");



document.addEventListener("DOMContentLoaded", () => {
    const conteneurQuestion = document.getElementById("questionContainer");
    const champReponse = document.getElementById("answerInput");
    const boutonRepondre = document.getElementById("answerButton");
    const poulet = document.querySelector(".chick");
    const questions = [
        { question: "Quel langage est utilisé pour structurer le contenu des pages web ?", reponse: "HTML" },
        { question: "Quel langage est utilisé pour styliser les éléments d'une page web ?", reponse: "CSS" },
        { question: "Quel langage est principalement utilisé pour rendre une page web interactive et dynamique ?", reponse: "Javascript" },
        { question: "Quel langage est couramment utilisé pour les opérations côté serveur dans le développement web ?", reponse: "PHP" },
        { question: "Quel langage est connu pour son utilisation en science des données, en apprentissage automatique et en intelligence artificielle ?", reponse: "Python" },
        { question: "Quel langage permet de créer des animations et des jeux web ?", reponse: "Javascript" },
        { question: "Quel langage est principalement axé sur la mise en forme et la présentation des pages web ?", reponse: "CSS" },
        { question: "Quel langage est utilisé pour créer des formulaires et des structures de données sur une page web ?", reponse: "HTML" },
        { question: "Quel langage est souvent utilisé pour le développement rapide d'applications web ?", reponse: "Python" },
        { question: "Quel langage est apprécié pour sa simplicité et sa lisibilité, notamment dans le domaine de l'apprentissage de la programmation ?", reponse: "Python" }
    ];
    let indexQuestionCourante = 0;
    let questionCourante;
    let vies = 3; // Nombre de vies du joueur
    let enTrainDeVoler = true; // Variable pour suivre si le poulet vole
    let enTrainDeMonter = false; // Variable pour suivre si le poulet monte
    let etagesDescendus = 0;
    const hauteurEtage = 100; // Hauteur d'un étage en pixels
    const nombreEtagesTotal = 3; // Nombre total d'étages
    let etagesMontes = 0;
    /* Vie */
    const conteneurCoeurs = document.getElementById("heart-container");
    const coeurs = document.querySelectorAll(".heart");
    function mettreAJourCoeurs() {
        for (let i = 0; i < 3; i++) {
            if (i < vies) {
                coeurs[i].style.backgroundColor = "red";
            } else {
                coeurs[i].style.backgroundColor = "transparent";
            }
        }
        // Si le joueur récupère une vie, mettez à jour le nombre d'étages montés
        if (vies > 0) {
            etagesMontes++; // Augmentez d'un étage
            // Limitez le nombre d'étages montés au nombre total d'étages
            if (etagesMontes > nombreEtagesTotal) {
                etagesMontes = nombreEtagesTotal;
            }
            const positionPoulet = etagesMontes * hauteurEtage;
            poulet.style.transition = "transform 0.5s ease"; // Ajoutez une transition en douceur
            poulet.style.transform = `translateY(${positionPoulet}px)`;
        }
    }

    /* Faire descendre le poulet */

    function faireDescendrePoulet() {

        if (etagesDescendus > 0) {
            etagesDescendus--;

            // Assurez-vous que le poulet ne monte pas plus haut que sa position initiale
            if (etagesDescendus < 0) {
                etagesDescendus = 0;
            }

            const positionPoulet = etagesMontes * hauteurEtage;
            poulet.style.transition = "transform 0.5s ease";
            poulet.style.transform = `translateY(${positionPoulet}px)`;
        }
    }


    /* Faire monter le poulet */

    function faireMonterPoulet() {
        if (etagesMontes > 0) {
            etagesMontes--;

            // Assurez-vous que le poulet ne monte pas plus haut que sa position initiale
            if (etagesMontes < 0) {
                etagesMontes = 0;
            }

            const positionPoulet = etagesMontes * hauteurEtage;
            poulet.style.transition = "transform 0.5s ease";
            poulet.style.transform = `translateY(${positionPoulet}px)`;
        }
    }

    /* Div question */
    function poserQuestion() {
        if (indexQuestionCourante < questions.length) {
            questionCourante = questions[indexQuestionCourante];
            conteneurQuestion.style.display = "block";
            document.getElementById("question").textContent = questionCourante.question;
            champReponse.value = "";
        } else {
            // Vous avez terminé toutes les questions
            // Ici, vous pouvez ajouter une logique pour gérer la fin du jeu, par exemple, afficher un message de fin.
        }
    }

    /* Click question */
    boutonRepondre.addEventListener("click", () => {
        const reponseUtilisateur = champReponse.value.toLowerCase();;
        const reponseCorrecte = questionCourante.reponse.toLowerCase();;
        if (reponseUtilisateur === reponseCorrecte) {
            indexQuestionCourante++;
            conteneurQuestion.style.display = "none";
            enTrainDeVoler = false; // Le poulet peut voler à nouveau après une réponse correcte
            faireMonterPoulet(); // Appelez la fonction pour faire voler le poulet
            if (indexQuestionCourante < questions.length) {
                // Augmentez le nombre de vies en cas de réponse correcte
                if (vies < 3) {
                    vies++;
                }
                // etagesDescendus = 0; // Réinitialisez le nombre d'étages descendus
                mettreAJourCoeurs(); // Mettez à jour les cœurs
                setTimeout(poserQuestion, 500);
                faireMonterPoulet();
            } else {
                window.location.href = "final.php";
            }
            // Appelez la fonction pour faire remonter le poulet
        } else {
            vies--; // Réduisez le nombre de vies en cas de mauvaise réponse
            mettreAJourCoeurs(); // Mettez à jour les cœurs
            if (vies <= 0) {
                // Si le joueur n'a plus de vies, faites descendre le poulet
                champReponse.value = "";
                enTrainDeVoler = false;
                enTrainDeMonter = false;
                faireDescendrePoulet();

                MODAL.classList.remove('hidden');
            } else {
                // Si le joueur a encore des vies, faites descendre le poulet d'un étage
                enTrainDeVoler = false;
                enTrainDeMonter = false;
                faireDescendrePoulet();
                champReponse.value = "";
            }
        }
    });
    poserQuestion();

});