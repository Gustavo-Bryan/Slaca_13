// Mudar a imagem do video, para simular um player de video real.
const imgVideo = document.querySelector("#img-video");
const mainContainer = document.querySelector(".main-container");
const itensVideo = document.querySelectorAll(".video");

mainContainer.addEventListener("click", () => {
  itensVideo.forEach((item) => {
    item.classList.toggle("esconder");
    if (item.classList.contains("esconder")) {
      imgVideo.src = "./imgs/Video-play.png";
    } else {
      imgVideo.src = "./imgs/Video.png";
    }
  });
});

// Mostrar/Esconder conteúdo do "Resumo"
const verMais = document.querySelector(".ver");
const paragrafos = document.querySelector(".resumo-conteudo-p");
const textoExtra = document.querySelector("#texto-extra");
const pontos = document.querySelector("#pontos");

verMais.addEventListener("click", () => {
  if (verMais.innerText === "Ver Mais") {
    textoExtra.style.display = "block";
    pontos.style.display = "none";
    paragrafos.style.display = "block";
    verMais.innerText = "Ver Menos";
    textoExtra.appendChild(verMais);
  } else {
    textoExtra.style.display = "none";
    pontos.style.display = "inline";
    paragrafos.style.display = "inline";
    verMais.innerText = "Ver Mais";
    pontos.appendChild(verMais);
  }
});

// Criar um Tópico
const btnCriarDiscussao = document.querySelector("#criar-discussao");
const discussaoConteudo = document.querySelector(".discussao-conteudo");
const formularioDiscussao = document.querySelector(".formulario-discussao");

btnCriarDiscussao.addEventListener("click", () => {
  discussaoConteudo.style.display = "none";
  formularioDiscussao.style.display = "grid";
});

// Feedback do envio
const feedback = document.querySelector(".feedback-container");
const btnEnviar = document.querySelector("#enviar");

// Cria um novo Tópico
btnEnviar.addEventListener("click", () => {
  const assunto = document.querySelector("#assunto-discussao").value;
  const mensagem = document.querySelector("#conteudo-discussao").value;

  // Verifica se a pessoa colocou assunto e escreveu uma mensagem
  const outroTopico = document.querySelector("#outra-discussao");
  outroTopico.addEventListener("click", () => {
    alert(
      "Você só pode criar outro tópico após seu último tópico ter sido aprovado pela nossa equipe!"
    );
  });
  if (assunto.length > 0 && mensagem.length > 0) {
    formularioDiscussao.style.display = "none";
    feedback.style.display = "grid";

    // Cria o novo tópico
    const topico = document.querySelector(".discussao-topico");
    const novoTopico = topico.cloneNode(true);
    topico.previousElementSibling.appendChild(novoTopico);

    // Redefinindo o valor do assunto do novo tópico
    const novoAssunto = novoTopico.querySelector(".assunto");
    novoAssunto.innerText = assunto;

    // Redefinindo o valor da mensagem do novo tópico
    const novaMensagem = novoTopico.querySelector(".pergunta");
    novaMensagem.innerText = mensagem;

    //Mensagem de confirmação para o novo tópico
    const aguarde = novoTopico.querySelector(".container-aguarde");
    aguarde.style.display = "grid";

    //Editar o Tópico
    const editar = novoTopico.querySelector("#editar");
    editar.addEventListener("click", () => {
      formularioDiscussao.style.display = "grid";
      feedback.style.display = "none";
      novoTopico.remove();
      btnEnviar.innerText = "Editar";
    });
  } else {
    alert("Coloque um Assunto e coloque sua mensagem no campo Conteúdo");
  }
});

// Mostrar as respostas do último post
const btnResposta = document.querySelector(".resposta");
const containerResposta = document.querySelector(".resposta-container");

btnResposta.addEventListener("click", () => {
  containerResposta.classList.toggle("ativo");
});

// Menu-Hámburguer
const menu = document.querySelector("[data-menu='mobile']");
const itenMenu = document.querySelector(".nav-itens");

menu.addEventListener("click", () => {
  itenMenu.classList.toggle("ativo");
});

// Mostrar o e-mail do usuário após o click na foto de perfil
const fotoPerfil = document.querySelector(".header-perfil img");
const spanPerfil = document.querySelector(".header-perfil span + span");
fotoPerfil.addEventListener("click", () => {
  spanPerfil.classList.toggle("ativo");
});

// Interação ao clicar no favoritar
const favoritar = document.querySelectorAll(".favoritar");

favoritar.forEach((imgFavoritar) => {
  imgFavoritar.addEventListener("click", (event) => {
    event.target.classList.toggle("ativo");
    let contador = event.target.nextElementSibling.children[0];
    let likes = event.target.nextElementSibling.children[1];

    if (event.target.classList.contains("ativo")) {
      contador.innerText++;
      if (+contador.innerText > 1) {
        likes.innerText = "likes";
      }
    } else {
      if (+contador.innerText == 2) {
        likes.innerText = "like";
      }
      contador.innerText--;
    }
  });
});
