document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const fileLabel = document.getElementById('fileLabel');
    const infoConfidencialCheckbox = document.getElementById('infoConfidencialCheckbox');
    const infoConfidencialForm = document.getElementById('infoConfidencialForm');
    const guardarBtn = document.getElementById('guardarBtn');
    const borrarBtn = document.getElementById('borrarBtn');
  
    // Mostrar nombre del archivo seleccionado
    fileInput.addEventListener('change', function () {
      fileLabel.textContent = this.files[0] ? this.files[0].name : 'No se ha seleccionado ningún archivo.';
    });
  
    // Mostrar/ocultar formulario de información confidencial
    infoConfidencialCheckbox.addEventListener('change', function () {
      infoConfidencialForm.style.display = this.checked ? 'block' : 'none';
    });
  
    // Borrar datos introducidos en el formulario
    borrarBtn.addEventListener('click', function () {
      document.getElementById('datosBasicosForm').reset();
    });
  
    // Puedes agregar más funcionalidades o lógica según sea necesario
  
  });