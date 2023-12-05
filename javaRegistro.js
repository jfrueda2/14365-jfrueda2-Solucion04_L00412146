document.addEventListener('DOMContentLoaded', function () {
    const callePrincipalInput = document.getElementById('callePrincipal');
    const transversalInput = document.getElementById('transversal');
    const entregaPropietarioCheckbox = document.getElementById('entregaPropietario');
    const entregaTerceroCheckbox = document.getElementById('entregaTercero');
    const enviarDatosBtn = document.getElementById('enviarDatosBtn');
    const infoConfidencialDiv = document.getElementById('infoConfidencial');
    const guardarBtn = document.getElementById('guardarBtn');
  
    callePrincipalInput.addEventListener('input', toggleEnviarDatosBtn);
    transversalInput.addEventListener('input', toggleEnviarDatosBtn);
    entregaPropietarioCheckbox.addEventListener('change', toggleEnviarDatosBtn);
  
    entregaTerceroCheckbox.addEventListener('change', function() {
      infoConfidencialDiv.style.display = this.checked ? 'block' : 'none';
      toggleEnviarDatosBtn();
    });
  
    function toggleEnviarDatosBtn() {
      if (callePrincipalInput.value.trim() !== '' && transversalInput.value.trim() !== '' && entregaPropietarioCheckbox.checked) {
        enviarDatosBtn.disabled = false;
      } else {
        enviarDatosBtn.disabled = true;
      }
    }
  
    guardarBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evitar el envío del formulario
      // Aquí puedes agregar la lógica para guardar los datos
      alert('Datos guardados');
    });
  
    enviarDatosBtn.addEventListener('click', function() {
      // Aquí puedes agregar la lógica para enviar los datos
      alert('Datos enviados');
    });
  });