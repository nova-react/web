        // Mostrar/esconder detalles técnicos
function toggleDetails(id) {
            const details = document.getElementById(id);
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
        }