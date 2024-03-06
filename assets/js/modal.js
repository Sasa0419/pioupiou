
const MODAL = document.querySelector(".App");
const BOUTON = document.querySelector(".ok");





    // console.log(IMAGE);
    BOUTON.addEventListener('click', () => {
        //Au click sur une image, on enlève la classe hidden (celle qui fait que notre modal est cachée)
        MODAL.classList.remove('hidden');

        
    })


// En JS, récupérer la p'tite croix pour ajouter un eventListener pour qu'au click, la modal se désafficher
CLOSE.addEventListener('click', () => {
    MODAL.classList.add('hidden');
    

})

// ----- BONUS 
// Quand on clique sur la fenêtre, on veut fermer la modal 
// MAIS uniquement si c'est sur la modal quand elle est ouverte
window.addEventListener('click', (e) => {
    if(e.target == MODAL) {
        MODAL.classList.add('hidden');
 
    }
})