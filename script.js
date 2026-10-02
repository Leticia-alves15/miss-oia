const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você fosse governante, qaul seria a sua primeira medida contra o desmatamento ilegal?",
        alternativas: [
            {
                texto: "Aumento da fiscalização em capo",
                afirmacao: "Você puniria os infratores radpidamente, impedindo a destruição antes que ela aumente"
            },
            {
                texto: "Criação de reservas protegidas",
                afirmacao: "Pois áreas demarcadas legalmente sofrem menos invasões assim protegendo a biodiversidade"
            }           
            
        ]
    },
    {
        enunciado: "Como vocẽ incentivaria os fazendeiros a não desmaterem?"
        alternativas: [
            {
                texo:" Oferendo crédito de carbono."
                afirmacao:"Assim, o produto ganharia dinheiro direto apenas por manter a floresta em pé."
            },
            {
                texto: "Reduzindo os impostos de quem protege",
                afirmacao:"Você iria premiar quem cumprise a regra cumpri-se a lei tornado a preservação mais vantagosa doque a destruição."
            }
        ]
    },
    {
        enunciado:"Como vocẽ mudaria a educação escolar para ajudar as florestas?",
        alternativas: [
            {
                texto:"Criando aulas práticas sobre o plantio ",
                afirmacao:"Assim vocẽ conectaria as crianças com a terra desde de cedo."
            },
            {
                texto:"Ensinado consumo consciente.",
                afirmacao:"Vocẽ mostraria como nossas compras diárias impactam no meio ambiente."
            }
            
        ]
    },
    {
        enunciado: "Você é dono de uma fazendana amazônia e quer aumentar seus lucros. Oque você faria?",
        alternativas: [
            {
                texto:"Você desmata a floresta para plantar mais e ganhar dinheiro mais rápido.",
                afirmacao:"Você ganha dinheiro rápido, mais esgota o solo em poucos anos."
            },
            {
                texto:"Você preserva a floresta e lucra vendendo crédito de carbono.",
                afirmacao:"Assim, mantendo lucros seguros e não desmatando o solo"
            }
            
        ]
    },
    {
        enunciado: "Você governa um estado e precisa  ",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();