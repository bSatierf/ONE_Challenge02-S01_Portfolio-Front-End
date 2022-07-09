//Seu JavaScript de validação aqui

// Pergar elementos do html

const submitBtn = document.querySelector('.formcontato__form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const exclamationIcon = document.querySelector('.exclamation');
const checkIcon = document.querySelector('.check');

function validaDados() {
  const nome = nomeInput.value;
  const email = emailInput.value;
  const assunto = assuntoInput.value;

  if (nome === '') {
    adicionaErro(nomeInput, 'O campo nome é obrigatório!');
    nomeInput.focus();
    console.log('aquiii');
  } else if (nome !== '') {
    adicionaSucesso(nomeInput);
    if (email === '') {
      adicionaErro(emailInput, 'O campo email é obrigatório!');
      console.log('aqui');
      emailInput.focus();
    } else if (!validaEmail(email)) {
      adicionaErro(emailInput, 'Por favor, insira um email válido!');
    } else {
      adicionaSucesso(emailInput);
      console.log('opa');
      if (assunto === '') {
        adicionaErro(assuntoInput, 'O campo assunto é obrigatório!');
      } else if (assunto !== '') {
        adicionaSucesso(assuntoInput);
      }
    }
  }
}

function validaEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function adicionaErro(input, mensagem) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  const exclamation = formControl.querySelector('.exclamation');

  small.innerHTML = mensagem;
  input.classList.add('error');
  exclamation.classList.add('error');
  small.classList.add('error');
}

function adicionaSucesso(input) {
  const formControl = input.parentElement;
  const exclamation = formControl.querySelector('.exclamation');
  const check = formControl.querySelector('.check');
  const small = formControl.querySelector('small');

  exclamation.classList.remove('error');
  input.classList.remove('error');
  small.classList.remove('error');
  input.classList.add('success');
  check.classList.add('success');
}

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  validaDados();
  console.log('Olá, Mundo!');
});
