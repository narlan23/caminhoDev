const pergunta = document.getElementById('pergunta');
const btn1 = document.getElementById('btn1');
const resp = document.getElementById('resp');
let Oresp = "";

btn1.addEventListener('click',function(){
    btn1.innerText = "Iniciar";
    inicialQuest();
});

function inicialQuest(){
    pergunta.innerText = "Se quer seguir para área de Front-End ou seguir para a área de Back-End?";
    btn1.innerText = "Confirmar";
    Oresp = resp.value.trim().toLowerCase();
    if(Oresp === "front-end"){
        pergunta.innerText =  "se quer aprender React ou aprender Vue?";
        setupNextQuestion(quest01);   
    }else if(Oresp === "back-end"){
        pergunta.innerText =  "se quer aprender C# ou aprender Java?";
        setupNextQuestion(quest01);  
    } 
}

function setupNextQuestion(nextFunction) {
    btn1.onclick = function() {
        Oresp = resp.value.trim().toLowerCase();
        nextFunction();
    };
}

function quest01(){
    pergunta.innerText = "Se quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.";
        
    if(Oresp.toLowerCase() === "especializar"){
        pergunta.innerText =  "se torne um especialista!";
        btn1.innerText = "Proximo";
        setupNextQuestion(quest02);
    }else if(Oresp.toLowerCase() === "fullstack"){
        pergunta.innerText =  "se torne um desenvolverdor fullstack!";
        btn1.innerText = "Proximo";
        setupNextQuestion(quest02);
    }
    
}

function quest02(){    
    if(Oresp.toLowerCase() === "especializar"){
        pergunta.innerText = "Quais são as tecnologias que deseja especializar ou de conhecer?";
        btn1.innerText = "Escolher";
        setupNextQuestion(loopQuest);
    }else if(Oresp.toLowerCase() === "fullstack"){
        pergunta.innerText = "Quais são as tecnologias deseja aprender?"
        btn1.innerText = "Escolher";
        setupNextQuestion(loopQuest);
    }     
}

function loopQuest() {
    let resp3 = "";
    let text = "";
    // Loop para acumular as tecnologias até que o usuário digite "Fim"
    while (resp3.toLowerCase() !== "fim") {

        // Pede ao usuário para digitar uma tecnologia
        resp3 = prompt("Digite uma tecnologia (ou 'Fim' para terminar):");

        // Verifica se a resposta não é "Fim" antes de concatenar
        if (resp3.toLowerCase() !== "fim") {
            text += resp3 + ", ";
        }    
    }

    // Remove a última vírgula e espaço do texto
    text = text.slice(0, -2);
    pergunta.innerText = "Suas Tecnologias são: " + text;
    btn1.innerText = "Inicio";
    setupNextQuestion(inicialQuest);
}
