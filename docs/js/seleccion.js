    document.addEventListener('DOMContentLoaded', function() {
      const selectElement = document.getElementById('categorySelector');
      
      selectElement.addEventListener('change', function() {
        const selectedValue = this.value;
        
        // Solo redirigir si se seleccionó un valor (no la opción vacía)
        if (selectedValue) {
          // Construir la URL: selectedValue + '.html'
          const redirectUrl = selectedValue + '.html';
          
          // Redirigir a la nueva página
          window.location.href = redirectUrl;
        }
      });
    });