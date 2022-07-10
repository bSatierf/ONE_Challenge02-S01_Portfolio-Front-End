//  Seu JavaScript de validação aqui

// Pergar elementos do html

const submitBtn = document.querySelector('.formcontato__form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const mensagemInput = document.querySelector('#mensagem');

function validaEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function adicionaErro(input, mensagem) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  const exclamation = formControl.querySelector('.exclamation');
  const check = formControl.querySelector('.check');

  check.classList.remove('success');
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

function validaDados() {
  const nome = nomeInput.value;
  const email = emailInput.value;
  const assunto = assuntoInput.value;
  const mensagemContato = mensagemInput.value;

  if (nome === '') {
    adicionaErro(nomeInput, 'O campo nome é obrigatório!');
    nomeInput.focus();
  } else if (nome !== '') {
    adicionaSucesso(nomeInput);
    if (email === '') {
      adicionaErro(emailInput, 'O campo email é obrigatório!');
      emailInput.focus();
    } else if (!validaEmail(email)) {
      adicionaErro(emailInput, 'Por favor, insira um email válido!');
      emailInput.focus();
    } else {
      adicionaSucesso(emailInput);
      if (assunto === '') {
        adicionaErro(assuntoInput, 'O campo assunto é obrigatório!');
        assuntoInput.focus();
      } else if (assunto !== '') {
        adicionaSucesso(assuntoInput);
        if (mensagemContato === '') {
          adicionaErro(mensagemInput, 'O campo mensagem é obrigatório!');
          mensagemInput.focus();
        } else if (mensagemContato !== '') {
          adicionaSucesso(mensagemInput);
        }
      }
    }
  }
}

submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  validaDados();
});
