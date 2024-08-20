const letters = document.querySelectorAll(".letters span");

letters.forEach((letter) => {
    letter.addEventListener("click", (e) => {
        console.log(`Clicked on: ${e.target.textContent}`);
        letter.classList.add("active");

       
        setTimeout(() => {
            letter.classList.remove("active");
        }, 2000); 
    });
});
