document.addEventListener('DOMContentLoaded', () => {
  // Manejar clics en botones "Agregar al Carrito"
  const cartButtons = document.querySelectorAll('.add-to-cart');
  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.getAttribute('data-product');
      alert(`${product} ha sido agregado al carrito. Contáctanos para finalizar tu pedido.`);
    });
  });

  // Manejar el formulario de contacto
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    // Crear el cuerpo del correo
    const subject = encodeURIComponent(`Consulta de ${name} desde NovaReact`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
    window.location.href = `mailto:lrondan1126@gmail.com?subject=${subject}&body=${body}`;
  });
});