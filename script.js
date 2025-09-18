const form = document.getElementById("humor-form"); 
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
const imagemHumor = document.getElementById("imagem-humor");

const frasesPorHumor = {
  feliz: {
    frases: [
      "Continue espalhando essa energia positiva!",
      "Aproveite cada momento de alegria!",
      "Sua felicidade pode inspirar outras pessoas."
    ],
    imagens: [
      "https://www.abbottbrasil.com.br/corpnewsroom/nutrition-health-and-wellness/mente-positiva-sua-atitude-pode-ser-a-chave-para-a-felicidade/_jcr_content/root/rarticle_container/image.coreimg.85.1024.jpeg/1656048158931/eng-think-happier-masthead-1304x620.jpeg",
      "https://static.vecteezy.com/ti/fotos-gratis/t2/23028497-feliz-pequeno-garoto-corre-com-dele-bracos-estendido-atraves-a-parque-dentro-verao-foto.jpg"
    ]
  },
  triste: {
    frases: [
      "Tudo bem não estar bem o tempo todo.",
      "Você não está sozinho, tudo vai melhorar.",
      "Seja gentil consigo mesmo hoje."
    ],
    imagens: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGcm8ufVIc0z8P1hG-KtMUj5mgkNmgNZFXPm92GVVYg&s&ec=73068123",
      "https://media.tenor.com/BjqSxfDXiPwAAAAM/me-at-school.gif"
    ]
  },
  ansioso: {
    frases: [
      "Respire fundo, um passo de cada vez.",
      "Acalme sua mente, você está fazendo o seu melhor.",
      "Foque no agora, o futuro se constrói aos poucos."
    ],
    imagens: [
      "https://media.tenor.com/f_saBHiUTz0AAAAM/cute-cat.gif",
      "https://media.tenor.com/13MO7LUAShwAAAAM/fadding-cat.gif"
    ]
  },
  motivado: {
    frases: [
      "Aproveite essa motivação para realizar algo importante!",
      "Você tem tudo o que precisa para vencer.",
      "Continue firme, seus esforços terão resultado."
    ],
    imagens: [
      "https://img.wattpad.com/c5faefe1f7597429355be9bfe8eb20c3572d7f27/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f68515046714c585a444b394e61673d3d2d3138332e313463353033313635303763326634643532343234343634313435362e676966",
      "https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2015/05/08151214/historias-motivacao.jpg"
    ]
  },
  neutro: {
    frases: [
      "Cada dia é uma nova oportunidade.",
      "Mantenha o equilíbrio e siga em frente.",
      "O simples também é importante."
    ],
  }
};

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const humor = humorInput.value.toLowerCase().trim();
  localStorage.setItem("humor", humor);
  humorRegistrado.textContent = `Seu humor registrado: ${humor}`;
});

mensagemBtn.addEventListener("click", function() {
  let humor = localStorage.getItem("humor");
  if (!humor || !frasesPorHumor[humor]) {
    humor = "neutro"; 
  }

  const frases = frasesPorHumor[humor].frases;
  const imagens = frasesPorHumor[humor].imagens;

  const fraseSorteada = frases[Math.floor(Math.random() * frases.length)];
  const imagemSorteada = imagens[Math.floor(Math.random() * imagens.length)];

  mensagemMotivacional.textContent = fraseSorteada;
  imagemHumor.innerHTML = `<img src="${imagemSorteada}" alt="${humor}" width="200">`;
});
