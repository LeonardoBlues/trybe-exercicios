function validaForms() {
  validation = new JustValidate('#form');

  validation
    .addField('#fullName', [
      {
        rule: 'minLength',
        value: 10,
      },
      {
        rule: 'maxLength',
        value: 40,
      },
      {
        rule: 'required',
        errorMessage: 'Nome is required',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        errorMessage: 'Email is invalid!',
      },
      {
        rule: 'minLength',
        value: 10,
      },
      {
        rule: 'maxLength',
        value: 50,
      },
    ])
    .addField('#why', [
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 500,
      },
    ])
    .addRequiredGroup(
      '#escolhaDestino',
      'Selecione um destino'
      )
      .addField('#datepicker', [
        {
          rule: 'required',
          errorMessage: 'Data is required',
        },
      ]);
}

function limparFormulario() {
  const todosInputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < todosInputs.length; index += 1) {
    todosInputs[index].value = '';
    todosInputs[index].checked = false;
  }
  textArea.value = '';
  window.location.reload();
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

window.onload = function () {
  const submitBtn = document.querySelector('#enviar');
  submitBtn.addEventListener('click', validaForms);

  const clearBtn = document.querySelector('#limpar');
  clearBtn.addEventListener('click', limparFormulario);

  const agreement = document.querySelector('#divulgaFotos')
  agreement.addEventListener('change', habilitaBotaoEnviar)

  picker = new Pikaday({ field: document.getElementById('datepicker') });
  validate = new window.JustValidate('#form');
};