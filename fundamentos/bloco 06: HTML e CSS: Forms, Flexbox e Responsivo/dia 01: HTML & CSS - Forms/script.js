function tirarSubmit(event) {
  event.preventDefault();
  const validation = verificaInputs();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function limparFormulario() {
  const todosInputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < todosInputs.length; index += 1) {
    todosInputs[index].value = '';
    todosInputs[index].checked = false;
  }
  textArea.value = '';
}

function habilitaBotaoEnviar() {
  const submitBtn = document.querySelector('#enviar');
  const agreement = document.querySelector('#divulgaFotos');
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function verificaInputs() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}

window.onload = function () {
  const submitBtn = document.querySelector('#enviar');
  submitBtn.addEventListener('click', tirarSubmit);

  const clearBtn = document.querySelector('#limpar');
  clearBtn.addEventListener('click', limparFormulario);
  
  const agreement = document.querySelector('#divulgaFotos')
  agreement.addEventListener('change', habilitaBotaoEnviar)
};