document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        
        // Obtén el valor del atributo data-section
        const targetSection = document.querySelector(`#${this.getAttribute('data-section')}`);
        
        // Realiza el desplazamiento hacia la sección
        window.scrollTo({
            top: targetSection.offsetTop, // La posición de la sección
            behavior: 'smooth' // Para un desplazamiento suave
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const text = "Introducción _";
    let i = 0;
    const title = document.querySelector("#introduccion h2");

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 250);
        }
    }
    
    typeWriter();  // Llamada a la función de escritura
});
