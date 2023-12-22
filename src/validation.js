// validation.js

// Función para validar el correo electrónico
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      return 'El correo electrónico no puede estar vacío.';
    } else if (email.length > 35) {
      return 'El correo electrónico no puede tener más de 35 caracteres.';
    } else if (!emailRegex.test(email)) {
      return 'El formato del correo electrónico no es válido.';
    }
  
    return null; // No hay error
  };
  
  // Función para validar la contraseña
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{6,10}$/;
  
    if (!password.trim()) {
      return 'La contraseña no puede estar vacía.';
    } else if (!passwordRegex.test(password)) {
      return 'La contraseña debe tener entre 6 y 10 caracteres y contener al menos un número.';
    }
  
    return null; // No hay error
  };
  